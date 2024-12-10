import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router
import Layout from './components/Layout/Layout'; // 레이아웃 컴포넌트
import Home from './components/Home/Home'; // 홈 컴포넌트
import PostPage from './components/PostPage/PostPage'; // 게시물 상세 페이지
import PostList from './components/PostList/PostList';
import Calendar from './components/Home/Calendar';
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 게시물 목록 페이지 */}
          <Route path="/posts" element={<PostList />} />
          <Route path="/post/:id" element={<PostPage />} />{' '}
          <Route path="/about" element={<Calendar />} />
          {/* 게시물 상세 페이지 */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
