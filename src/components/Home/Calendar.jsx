import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Calendar = () => {
  return (
    <section className="pl-20 pr-20 horizontal-pad flex flex-col items-start justify-between pt-[56px] sm:pt-[64px] md:pt-[72px] lg:flex-row lg:items-center lg:pt-[80px]">
      <div className="text-5xl font-bold text-gray-800 dark:text-white">
        <GitHubCalendar username="AJeonghyun" hideColorLegend="true" />
      </div>
    </section>
  );
};

export default Calendar;
