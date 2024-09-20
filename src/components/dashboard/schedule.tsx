'use client'
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const Schedule = () => {
    // 定义需要高亮的日期
  const mathDates = [
    new Date(2024, 8, 19), // 2024-09-19
    new Date(2024, 8, 25), // 2024-09-25
  ];

  const readingDates = [
    new Date(2024, 8, 11), // 2024-09-19
    new Date(2024, 8, 23), // 2024-09-25
  ];

  const writingDates = [
    new Date(2024, 8, 2), // 2024-09-19
    new Date(2024, 8, 3), // 2024-09-25
  ];

   // 使用 modifiers 标记高亮日期
   const modifiers = {
    math: mathDates,
    reading:readingDates,
    writing:writingDates,
  };

  return (
    <div className="w-full">
      <DayPicker
      modifiers={modifiers}
      modifiersClassNames={{
        math: "bg-[#EEB918] text-white",
        reading:"bg-[#FF6410] text-white",
        writing:"bg-[#3C176E] text-white",
      }}
    />
    </div>
  );
};

export default Schedule;
