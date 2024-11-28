import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import CodeExecutor from '../CodeExecutor/CodeExecutor';
import mdx from '../../data/mdx';

// MDXProvider에 전달할 커스텀 컴포넌트 등록
const components = {
  CodeExecutor,
};

const PostPage = () => {
  const { id } = useParams(); // URL 파라미터에서 'id' 값을 가져옴

  const [mdxContent, setMdxContent] = useState(null); // MDX 콘텐츠 상태
  const [error, setError] = useState(false); // 에러 상태

  useEffect(() => {
    if (mdx[id]) {
      mdx[id]()
        .then((module) => {
          setMdxContent(() => module.default); // MDX 콘텐츠 설정
          setError(false); // 에러 상태 초기화
        })
        .catch((error) => {
          console.error('MDX 파일 로딩 오류:', error);
          setError(true); // 에러 상태 활성화
        });
    } else {
      setError(true); // 잘못된 ID 처리
    }
  }, [id]);

  // 로딩 중 상태 표시
  if (!mdxContent && !error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white">
        <p>게시물을 로딩 중입니다...</p>
      </div>
    );
  }

  // 에러 메시지 표시
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-red-500">
        <p>게시물을 불러오는데 실패했습니다. 다시 시도해주세요.</p>
      </div>
    );
  }

  const MDXContentComponent = mdxContent; // 동적으로 로드된 MDX 콘텐츠를 설정

  return (
    <div className="p-8 flex flex-col items-center w-full max-w-screen-lg mx-auto prose dark:prose-invert dark:bg-black">
      <MDXProvider components={components}>
        <MDXContentComponent /> {/* MDX 콘텐츠 렌더링 */}
      </MDXProvider>
    </div>
  );
};

export default PostPage;
