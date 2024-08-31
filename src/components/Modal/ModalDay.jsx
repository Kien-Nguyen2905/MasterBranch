import React, { useState } from 'react';
import { Modal, Input, DatePicker, TimePicker, Radio, message } from 'antd';

const ModalDay = ({
  showEventModal,
  onClose,
  selectedDay,
  events,
  setEvents,
}) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [eventType, setEventType] = useState('appointment');

  const handleOk = () => {
    if (
      endTime &&
      startTime &&
      (endTime.isBefore(startTime) || endTime.isSame(startTime))
    ) {
      message.error(
        'End time must be greater than start time and cannot be the same!',
      );
      return;
    }
    if (title === '') {
      message.error('Tittle not empty');
      return;
    }
    if (!startTime || !endTime) {
      message.error('Time not empty');
      return;
    }
    const newEvent = {
      title,
      startTime: startTime ? startTime.format('HH:mm') : '',
      endTime: endTime ? endTime.format('HH:mm') : '',
      date: selectedDay.format('YYYY-MM-DD'),
      eventType,
    };

    const isDuplicate = events.some(
      (event) =>
        event.title === newEvent.title &&
        event.startTime === newEvent.startTime &&
        event.endTime === newEvent.endTime &&
        event.date === newEvent.date &&
        event.eventType === newEvent.eventType,
    );

    if (isDuplicate) {
      message.error('This event already exists!');
      return;
    }

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);

    localStorage.setItem('events', JSON.stringify(updatedEvents));

    onClose();
  };

  return (
    <Modal
      title="Add calendar"
      open={showEventModal}
      onOk={handleOk}
      onCancel={onClose}
    >
      <div className="flex flex-col">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-5 "
        />
        <div className="flex gap-2 pb-5">
          <DatePicker value={selectedDay} disabled />
          <TimePicker
            value={startTime}
            onChange={(time) => setStartTime(time)}
            format="HH:mm"
            placeholder="Start Time"
          />
          <TimePicker
            value={endTime}
            onChange={(time) => setEndTime(time)}
            format="HH:mm"
            placeholder="End Time"
          />
        </div>

        <Radio.Group
          onChange={(e) => setEventType(e.target.value)}
          value={eventType}
        >
          <Radio value="appointment">Appointment</Radio>
          <Radio value="event">Event</Radio>
        </Radio.Group>
      </div>
    </Modal>
  );
};

export default ModalDay;
