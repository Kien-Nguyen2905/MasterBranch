import React, { Fragment } from 'react';
import Day from './Day';
import ModalDay from '../Modal/ModalDay';

const Calendar = ({
  currentMonth,
  setShowEventModal,
  showEventModal,
  daySelected,
  setDaySelected,
  events,
  setEvents,
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-7">
        {currentMonth[0].map((day, i) => (
          <span
            key={i}
            className="flex items-center justify-center text-lg text-center text-slate-400 h-[70px]"
          >
            {day.format('ddd').charAt(0).toUpperCase() +
              day.format('ddd').slice(1).toLowerCase()}
          </span>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-7 grid-rows-5">
        {currentMonth.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, idx) => (
              <Day
                setShowEventModal={setShowEventModal}
                setDaySelected={setDaySelected}
                events={events}
                day={day}
                key={idx}
              />
            ))}
          </Fragment>
        ))}
      </div>
      {showEventModal && (
        <ModalDay
          showEventModal={showEventModal}
          onClose={() => setShowEventModal(false)}
          selectedDay={daySelected}
          events={events}
          setEvents={setEvents}
        />
      )}
    </div>
  );
};

export default Calendar;
