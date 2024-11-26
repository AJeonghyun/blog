import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useLocation } from 'react-router-dom'; // 현재 경로 확인을 위해 추가
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import CodeExecutor from '../CodeExecutor/CodeExecutor.jsx'; // CodeExecutor를 가져옴

const components = {
  CodeExecutor, // MDX에서 사용할 수 있도록 등록
};

const Layout = ({ children }) => {
  const location = useLocation();

  // "/post/:id" 경로일 때 Header 숨김
  const shouldHideHeader = location.pathname.startsWith('/post/');

  return (
    <MDXProvider components={components}>
      <div className="min-h-screen flex flex-col scrollbar-hide">
        {/* Header는 조건부 렌더링 */}
        {!shouldHideHeader && <Header />}
        <main className="relative overflow-auto flex-1 scrollbar-hide dark:bg-black">
          {children}
        </main>
        <Footer />
      </div>
    </MDXProvider>
  );
};

export default Layout;
