import dayjs from 'dayjs';
import React from 'react';

const Day = ({ day, setShowEventModal, setDaySelected, events }) => {
  const dayEvents =
    events?.filter((event) => event.date === day.format('YYYY-MM-DD')) || [];

  const checkDayInCurrentMonth = day.format('MM') != dayjs().month();

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }

  const handleClick = () => {
    setDaySelected(day);
    setShowEventModal(true);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 flex flex-col h-[110px] cursor-pointer"
    >
      <header className="flex flex-col items-center">
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()} ${
            checkDayInCurrentMonth ? '' : ' text-slate-400'
          }`}
        >
          {day.format('DD')}
        </p>
      </header>
      <div className="flex flex-col flex-1 gap-[2px]">
        {dayEvents?.slice(0, 2).map((evt) => (
          <div
            key={evt.date}
            onClick={() => handleClick(evt)}
            className="flex items-center justify-center h-5 "
          >
            <div className="w-1 h-full rounded-l-sm bg-dark-blue"></div>
            <div
              className={`${
                evt.eventType === 'appointment'
                  ? ' bg-light-orange'
                  : ' bg-dark-orange'
              }  text-gray-600 text-sm rounded-r-sm truncate flex-1`}
            >
              {evt.title}
            </div>
          </div>
        ))}
        {dayEvents?.length > 2 && (
          <div className="mt-1 text-sm text-light-blue">
            {`${dayEvents.length - 2} more`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;
