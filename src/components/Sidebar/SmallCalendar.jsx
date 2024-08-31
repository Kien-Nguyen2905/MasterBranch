import dayjs from 'dayjs';
import React, { Fragment } from 'react';
import HeaderSmallCalendar from './HeaderSmallCalendar';
const SmallCalendar = ({
  currentMonth,
  getDayClass,
  monthIndex,
  handlePrevMonth,
  handleNextMonth,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-b-4 rounded-sm ">
      <HeaderSmallCalendar
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        currentMonthIdx={monthIndex}
      />
      <div
        className="grid grid-rows-6 pb-5 "
        style={{ gridTemplateColumns: 'repeat(7, 50px)' }}
      >
        {currentMonth[0].map((day, i) => (
          <span
            key={i}
            className="flex items-center justify-center pb-3 text-sm text-center text-slate-500"
          >
            {day.format('ddd').toUpperCase()}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {}}
                className={`text-slate-800 text-sm text-center flex justify-center items-center }`}
              >
                <span
                  className={`${
                    day?.format('MM') != dayjs()?.month()
                      ? ''
                      : 'text-slate-400'
                  } text-sm w-9 h-9 flex items-center justify-center ${getDayClass(
                    day,
                  )}`}
                >
                  {day.format('D')}
                </span>
              </button>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
