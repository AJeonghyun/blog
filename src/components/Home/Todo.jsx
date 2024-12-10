import React from 'react';

const Todo = () => {
  return (
    <section className="pl-20 pr-20 horizontal-pad flex flex-col pt-[56px] sm:pt-[64px] md:pt-[72px] lg:pt-[80px] lg:items-start">
      {/* 목표 제목 */}
      <h3 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
        목표
      </h3>
      {/* Monthly Plan */}
      <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Monthly Plan
      </h3>
      <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Weekly Plan
      </h3>
    </section>
  );
};

export default Todo;
