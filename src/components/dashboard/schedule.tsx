'use client'
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const Schedule = () => {
    // 定义需要高亮的日期
  const highlightedDates = [
    new Date(2024, 8, 19), // 2024-09-19
    new Date(2024, 8, 25), // 2024-09-25
  ];
   // 使用 modifiers 标记高亮日期
   const modifiers = {
    highlighted: highlightedDates,
  };

  return (
    <div className="w-full flex justify-center items-center">
      <DayPicker
      modifiers={modifiers}
      modifiersClassNames={{
        highlighted: "bg-yellow-300 text-black",
      }}
    />
    </div>
  );
};

export default Schedule;
