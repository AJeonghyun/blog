import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, date }) => {
  return (
    <li className="group block w-auto h-40 rounded-3xl bg-white p-8 dark:bg-stone-900 transition-all duration-300 hover:scale-105">
      <Link
        to={`/post/${id}`} // 클릭 시 해당 게시물 상세 페이지로 이동
        className="flex flex-col justify-center items-start h-full text-right"
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-500">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{date}</p>
      </Link>
    </li>
  );
};

export default Card;
