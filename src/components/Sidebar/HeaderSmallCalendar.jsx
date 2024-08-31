import dayjs from 'dayjs';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const HeaderSmallCalendar = ({
  currentMonthIdx,
  handlePrevMonth,
  handleNextMonth,
}) => {
  return (
    <div className="flex items-center gap-8 pt-7">
      <button
        onClick={() => {
          handlePrevMonth();
        }}
      >
        <IoIosArrowBack color="#0F4C81" />
      </button>
      <p className="text-xl font-bold text-dark-blue">
        {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMM YYYY')}
      </p>
      <button
        onClick={() => {
          handleNextMonth();
        }}
      >
        <IoIosArrowForward color="#0F4C81" />
      </button>
    </div>
  );
};

export default HeaderSmallCalendar;
