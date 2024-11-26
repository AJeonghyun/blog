import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Posting = ({ posts }) => {
  return (
    <section className="pl-20 pr-20 pt-[56px] sm:pt-[64px] md:pt-[72px] lg:flex-row lg:pt-[80px]">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-4xl font-bold text-gray-800 dark:text-white">
          게시물 목록
        </h3>
        {/* "모든 글 보기" 버튼 */}
        <Link
          to="/posts"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 text-lg font-medium transition duration-300"
        >
          모든 글 보기 →
        </Link>
      </div>
      {/* 목록을 나타내는 ul */}
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
          />
        ))}
      </ul>
    </section>
  );
};

export default Posting;
