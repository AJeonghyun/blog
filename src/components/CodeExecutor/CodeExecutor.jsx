import React, { useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeExecutor = () => {
  const [code, setCode] = useState('// Type your JavaScript code here');
  const iframeRef = useRef(null);
  const [output, setOutput] = useState('');

  const executeCode = () => {
    if (iframeRef.current) {
      // Iframe에 메시지 전달
      iframeRef.current.contentWindow.postMessage(code, '*');
    }
  };

  React.useEffect(() => {
    // Iframe에서 메시지 수신
    const handleMessage = (event) => {
      setOutput(event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* 코드 편집기 */}
      <div className="border rounded-md">
        <CodeMirror
          value={code}
          height="200px"
          width='600px'
          extensions={[javascript()]}
          onChange={(value) => setCode(value)}
        />
      </div>

      {/* 실행 버튼 */}
      <button
        onClick={executeCode}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        실행
      </button>

      {/* 출력 결과 */}
      <div className="border rounded-md p-4 bg-gray-100">
        <h3 className="font-bold">Output:</h3>
        <pre>{String(output)}</pre>
      </div>

      {/* Sandbox iframe */}
      <iframe
        ref={iframeRef}
        title="sandbox"
        style={{ display: 'none' }}
        srcDoc={`
          <html>
            <body>
              <script>
                window.addEventListener('message', (event) => {
                  try {
                    const result = eval(event.data);
                    window.parent.postMessage(result, '*');
                  } catch (err) {
                    window.parent.postMessage('Error: ' + err.message, '*');
                  }
                });
              </script>
            </body>
          </html>
        `}
      />
    </div>
  );
};

export default CodeExecutor;
