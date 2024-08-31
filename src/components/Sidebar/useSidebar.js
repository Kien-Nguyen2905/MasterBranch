import dayjs from 'dayjs';
import { useMainContext } from '../../context/MainContext';

export const useSidebar = () => {
  const {
    daySelected,
    monthIndex,
    handlePrevMonth,
    handleNextMonth,
    currentMonth,
    events,
  } = useMainContext();

  function getDayClass(day) {
    const nowDay = dayjs().format('DD-MM-YY');
    const currentDay = day.format('DD-MM-YY');
    const selectDay = daySelected && daySelected.format('DD-MM-YY');
    if (nowDay === currentDay) {
      return 'bg-dark-blue rounded-full text-white';
    } else if (currentDay === selectDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }

  const smallCalendarProps = {
    currentMonth,
    monthIndex,
    getDayClass,
    handlePrevMonth,
    handleNextMonth,
  };
  const upComingEventProps = { events, daySelected, monthIndex };
  return { smallCalendarProps, upComingEventProps };
};
