import dayjs from 'dayjs';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Select, Space } from 'antd';
import { monthOptions } from '../../constants/month';

const Header = ({
  handleChange,
  handlePrevMonth,
  handleNextMonth,
  handleReset,
  monthIndex,
}) => {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex items-center justify-center gap-8 ">
        <button
          onClick={() => {
            handleReset();
          }}
          className="w-[65px] text-center items-center h-8 rounded-lg border border-light-blue text-light-blue font-extralight"
        >
          Today
        </button>
        <div className="flex items-center justify-center gap-8 ">
          <div className="flex items-center justify-center gap-8 ">
            <button
              onClick={() => {
                handlePrevMonth();
              }}
            >
              <IoIosArrowBack color="#0F4C81" />
            </button>
            <button
              onClick={() => {
                handleNextMonth();
              }}
            >
              <IoIosArrowForward color="#0F4C81" />
            </button>
          </div>
          <p className="text-xl font-bold text-dark-blue">
            {dayjs(new Date(dayjs()?.year(), monthIndex)).format('MMMM YYYY')}
          </p>
        </div>
      </div>
      <div className="">
        <Space wrap>
          <Select
            defaultValue={dayjs().month(monthIndex).format('MMMM')}
            value={monthIndex}
            style={{ width: 120 }}
            onChange={handleChange}
            options={monthOptions}
            className="custom-select"
          />
        </Space>
      </div>
    </div>
  );
};

export default Header;
