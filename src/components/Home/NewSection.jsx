import React from 'react';

const NewSection = () => {
  return (
    <section className="pl-20 pr-20 horizontal-pad flex flex-col items-start justify-between pt-[56px] sm:pt-[64px] md:pt-[72px] lg:flex-row lg:items-center lg:pt-[80px]">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
        새로운 섹션
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        여기는 새로운 섹션입니다. 이곳은 추가적인 내용이나 다른 페이지
        컴포넌트를 추가할 수 있습니다.
      </p>
    </section>
  );
};

export default NewSection;
