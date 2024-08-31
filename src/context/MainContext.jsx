import React, { useState, useEffect, createContext, useContext } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../util/getMonth';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [events, setEvents] = useState();

  function handlePrevMonth() {
    setMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  }

  function handleNextMonth() {
    setMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
  }

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  useEffect(() => {
    try {
      const storedEvents = localStorage.getItem('events');
      const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
      setEvents(parsedEvents);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const value = {
    events,
    setEvents,
    currentMonth,
    setCurrentMonth,
    monthIndex,
    setMonthIndex,
    daySelected,
    setDaySelected,
    showEventModal,
    setShowEventModal,
    handlePrevMonth,
    handleNextMonth,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
