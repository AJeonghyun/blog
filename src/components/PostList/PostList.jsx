import React, { useState } from 'react';
import posts from '../../data/posts'; // 게시물 데이터를 가져옴
import Card from '../../components/Card/Card'; // Card 컴포넌트

const PostList = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리 상태

  // 카테고리 목록을 추출 (중복 제거)
  const categories = [...new Set(posts.map((post) => post.category))];

  // 선택된 카테고리에 해당하는 게시물만 필터링
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        모든 게시물
      </h2>

      {/* 카테고리 카드 영역 */}
      <div className="flex flex-wrap gap-6 mb-8 justify-center w-full">
        <div
          onClick={() => setSelectedCategory('')} // "모든 카테고리" 클릭 시 필터 초기화
          className={`cursor-pointer p-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 ${
            selectedCategory === ''
              ? 'bg-gray-300 dark:bg-gray-600'
              : 'bg-gray-100 dark:bg-gray-800'
          }`}
        >
          <p className="text-xl font-semibold text-center text-gray-800 dark:text-white">
            전체
          </p>
        </div>
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)} // 카테고리 클릭 시 필터링
            className={`cursor-pointer p-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 ${
              selectedCategory === category
                ? 'bg-gray-300 dark:bg-gray-600'
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            <p className="text-xl font-semibold text-center text-gray-800 dark:text-white">
              {category}
            </p>
          </div>
        ))}
      </div>

      {/* 게시물 리스트 */}
      <div className="w-full max-w-2xl">
        <ul className="flex flex-col gap-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
