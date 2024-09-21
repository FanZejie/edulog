'use client'
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onTimeUp: (remainingTime: number) => void;
  isPaused: boolean; // 传递倒计时是否暂停的状态
}

const CountdownTimer = ({ onTimeUp, isPaused }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5分钟倒计时
  const [isTimeUpCalled, setIsTimeUpCalled] = useState(false); // 防止重复调用

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!isTimeUpCalled) {
      onTimeUp(timeLeft);
      setIsTimeUpCalled(true); // 只调用一次
    }
  }, [timeLeft, onTimeUp, isTimeUpCalled,isPaused]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center font-semibold font-mono  text-4xl tracking-widest  p-2  bg-[#f0f0f0] w-36 rounded-lg">
      {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;