import React from 'react';

const Todo = () => {
  return (
    <section className="pl-20 pr-20 horizontal-pad flex flex-col pt-[56px] sm:pt-[64px] md:pt-[72px] lg:pt-[80px] lg:items-start space-y-8">
      {/* 목표 제목 */}
      <h3 className="text-5xl font-bold text-gray-800 dark:text-white ">
        목표
      </h3>

      {/* 목표 섹션 */}
      <div className="bg-white dark:bg-stone-900 shadow-md rounded-3xl p-8 space-y-4">
        <h4 className="text-3xl font-semibold text-white dark:text-white mb-4">
          2025년 목표
        </h4>
        <ul className="list-disc list-inside space-y-2 text-white dark:text-white">
          <li className="text-xl">매일 커밋하기</li>
          <li className="text-xl">백준 골드 티어 달성하기</li>
          <li className="text-xl">강의 완강 3개 이상하기</li>
          <li className="text-xl">사이드 프로젝트 완성하기</li>
        </ul>
      </div>

      {/* Monthly Plan */}
      <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Monthly Plan
      </h3>
      <div className="bg-white dark:bg-stone-900 shadow-md rounded-3xl p-6 ">
        <p className="text-gray-700 dark:text-white">
          1월 달은 매주 강의를 들으며 코딩테스트를 준비할 예정입니다. <br />
          백엔드 프로젝트를 진행할 예정입니다.
        </p>
      </div>

      {/* Weekly Plan */}
      <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Weekly Plan
      </h3>
      <div className="bg-white dark:bg-stone-900 shadow-md rounded-3xl p-6">
        <p className="text-gray-700 dark:text-white">
          매일 백준에서 코딩테스트 문제를 3개씩 풀 예정입니다. <br />
          매일 코딩테스트 강의를 5개씩 수강할 예정입니다. <br />
          일주일에 백엔드 강의를 3회씩 수강할 예정입니다.
        </p>
      </div>
    </section>
  );
};

export default Todo;
