import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';

const ItemEvent = ({ evt }) => {
  return (
    <div
      key={evt.time}
      onClick={() => handleClick(evt)}
      className="flex items-center justify-center h-[110px] mb-5 "
    >
      <div className={`w-3 h-full ${' bg-light-blue'} rounded-l-lg`}></div>
      <div
        className={`${
          evt.eventType === 'appointment'
            ? ' bg-light-orange'
            : ' bg-dark-orange'
        }  text-gray-600 h-full text-sm rounded-r-lg truncate flex-1 pt-3 pl-3`}
      >
        <div className="flex items-center justify-between ">
          <div>
            <span className="font-medium text-dark-blue">{evt.title}</span>
            <br />
            <span className=" text-light-blue">
              {evt.startTime} - {evt.endTime}
            </span>
          </div>
          {evt.eventType === 'appointment' && (
            <div
              className={`flex items-center justify-center w-10 h-10 mr-5 rounded-full ${
                evt.eventType === 'appointment' ? 'bg-dark-blue' : 'bg-white'
              } `}
            >
              <IoVideocamOutline size={30} className="text-white" />
            </div>
          )}
        </div>
        {evt.eventType === 'appointment' && (
          <div className="flex items-center gap-2 pt-3">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-full w-7 h-7"
            />
            <a className="underline text-light-blue" href="">
              View Client Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemEvent;
