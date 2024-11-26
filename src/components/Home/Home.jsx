import React from 'react';
import Posting from './Posting'; // PostList 컴포넌트 임포트
import NewSection from './NewSection'; // NewSection 컴포넌트 임포트
import posts from '../../data/posts';
const Home = ({}) => {
  // 게시물 데이터

  return (
    <div className="bg-gray-100 dark:bg-black">
      {/* PostList 섹션 */}
      <div className="w-full">
        <Posting
          posts={posts} // 게시물 데이터를 PostList 컴포넌트로 전달
        />
      </div>

      {/* NewSection 섹션 */}
      <div className="w-full">
        <NewSection />
      </div>
    </div>
  );
};

export default Home;
