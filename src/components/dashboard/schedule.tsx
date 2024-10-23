'use client'
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { HomeData } from "@/lib/type";

type ScheduleProps = {
  homeData: HomeData; // 接收整个 homeData 对象
};

const Schedule = ({homeData}:ScheduleProps) => {

  // 使用 modifiers 标记高亮日期
  const [modifiers,setModifiers] = useState({
  })
  useEffect(()=>{
    console.log('homeDatain schedule',homeData)
    const courseSchedule = homeData.schedule.courseSchedule
    const mathArr = []
    const readingArr = []
    const writingArr = []
    if(courseSchedule.math && courseSchedule.math.length!=0){
      for(const item of courseSchedule.math){
        mathArr.push(new Date(item))
      }
    }
    if(courseSchedule.reading && courseSchedule.reading.length!=0){
      for(const item of courseSchedule.reading){
        readingArr.push(new Date(item))
      }
    }
    if(courseSchedule.writing && courseSchedule.writing.length!=0){
      for(const item of courseSchedule.writing){
        writingArr.push(new Date(item))
      }
    }
    setModifiers({
      math:mathArr,
      reading:readingArr,
      writing:writingArr
    })
  },[])

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
