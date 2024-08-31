import React, { Fragment, useState } from 'react';
import Header from './Header';
import { useCalendar } from './useCalendar';
import Calendar from './Calendar';

const MainCalendar = () => {
  const { headerProps, calendarProps } = useCalendar();

  return (
    <div className="bg-white w-full flex-1 mr-[100px] h-max">
      <Header {...headerProps} />
      <Calendar {...calendarProps} />
    </div>
  );
};

export default MainCalendar;
