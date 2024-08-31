import React, { useState } from 'react';
import ItemEvent from './ItemEvent';
import dayjs from 'dayjs';
import { Modal } from 'antd';

const UpcomingEvent = ({ events, monthIndex }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="px-3 pt-7">
      <>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-dark-blue">Upcoming Events</h2>
          <button
            onClick={showModal}
            className="h-8 px-4 font-thin text-white w-max bg-dark-blue rounded-2xl"
          >
            View All
          </button>
        </div>
        <div className="mb-3">
          <span className="text-base font-bold text-slate-400">
            Today,{' '}
            {dayjs(new Date(dayjs()?.year(), monthIndex)).format('DD MMM')}
          </span>
        </div>
      </>
      {events?.slice(0, 3).map((evt, index) => (
        <ItemEvent key={index} evt={evt} />
      ))}

      <Modal
        title="All Events"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{
          overflowY: 'auto',
          maxHeight: '530px',
        }}
      >
        {events?.map((evt, index) => (
          <ItemEvent key={index} evt={evt} />
        ))}
      </Modal>
    </div>
  );
};

export default UpcomingEvent;
