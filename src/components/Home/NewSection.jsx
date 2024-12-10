import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const NewSection = () => {
  return (
    <section className="pl-20 pr-20 horizontal-pad flex flex-col items-start justify-between pt-[56px] sm:pt-[64px] md:pt-[72px] lg:flex-row lg:items-center lg:pt-[80px]">
      <div className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
        <GitHubCalendar username="AJeonghyun" />
      </div>
    </section>
  );
};

export default NewSection;
