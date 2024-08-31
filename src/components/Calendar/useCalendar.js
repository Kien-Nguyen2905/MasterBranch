import dayjs from 'dayjs';
import { useMainContext } from '../../context/MainContext';

export const useCalendar = () => {
  const {
    monthIndex,
    setMonthIndex,
    handlePrevMonth,
    handleNextMonth,
    currentMonth,
    setCurrentMonth,
    setShowEventModal,
    showEventModal,
    daySelected,
    setDaySelected,
    events,
    setEvents,
  } = useMainContext();
  const handleChange = (value) => {
    setMonthIndex(value);
  };

  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  const headerProps = {
    handleChange,
    handlePrevMonth,
    handleNextMonth,
    handleReset,
    monthIndex,
  };
  const calendarProps = {
    currentMonth,
    setCurrentMonth,
    setShowEventModal,
    showEventModal,
    daySelected,
    setDaySelected,
    events,
    setEvents,
  };
  return {
    headerProps,
    calendarProps,
  };
};
