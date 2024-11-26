import React from 'react';
import Icebear from '../../assets/icebear.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-lightgray dark:bg-black shadow-md">
      {/* 내비게이션 컨테이너 */}
      <nav className="flex flex-col items-center py-6">
        {/* 로고 섹션 */}
        <div className="mb-4">
          <img
            src={Icebear}
            alt="Logo"
            className="h-24 w-24 rounded-full border-4 border-gray-300 dark:border-gray-600 object-cover"
          />
        </div>

        {/* 자기소개 섹션 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            무지의 가속팽창
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            안녕하세요 저는 안정현입니다.
            <br />
            현재 한동대학교에 다니고 있습니다.
            <br />
            
          </p>
        </div>

        {/* 내비게이션 링크 */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="/"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
