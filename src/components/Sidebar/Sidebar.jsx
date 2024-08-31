import React from 'react';
import SmallCalendar from './SmallCalendar';
import UpcomingEvent from './UpcomingEvent';
import { useSidebar } from './useSidebar';

const Sidebar = () => {
  const { smallCalendarProps, upComingEventProps } = useSidebar();
  return (
    <div className=" bg-white w-[450px] ml-[100px] h-max  ">
      <SmallCalendar {...smallCalendarProps} />
      <UpcomingEvent {...upComingEventProps} />
    </div>
  );
};

export default Sidebar;
