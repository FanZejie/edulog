'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@/lib/type";

import { useTimer } from "@/context/TimerContext";


const TimeRow = () => {
  const { totalSeconds, isTiming, startTimer, stopTimer } = useTimer();


  // 将总秒数格式化为分:秒
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  return (
    <div className="flex flex-row items-center  w-full ">
      <span className="font-bold text-lg">Start recording your study time today:</span>
      <Image className="ml-4 cursor-pointer" src="/goImg.png" width={60} height={60} alt="go" onClick={startTimer} />
      <Image className="ml-4 cursor-pointer" src="/stopImg.png" width={60} height={60} alt="stop"  onClick={stopTimer} />

      <div className="text-6xl font-semibold px-8 py-2 ml-4 bg-[#f0f0f0] rounded-xl">  {formatTime(totalSeconds)} {/* 显示格式化后的时间 */}</div>
    </div>
  )
};

export default TimeRow;
