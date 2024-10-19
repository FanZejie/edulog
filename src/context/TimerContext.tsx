'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from "@/lib/type";
interface TimerContextType {
  totalSeconds: number;
  isTiming: boolean;
  startTimer: () => void;
  stopTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

  // 将总秒数格式化为分:秒
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);// 空数组表示只在组件挂载时运行

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isTiming) {
      timer = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTiming]);

  const startTimer = () => {
    setIsTiming(true);
  };

  const stopTimer = async () => {
    setIsTiming(false);
    const time = formatTime(totalSeconds); // 获取当前计时的秒数
    const userName = user?.userName
    // 发送数据到后端
    try {
      const response = await fetch('/api/setStudyTime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, time }),
      });

      if (!response.ok) {
        throw new Error('网络错误');
      }

      // 处理后端响应
      const result = await response.json();
      console.log('数据已发送到后端:', result);
    } catch (error) {
      console.error('发送失败:', error);
    }
    setTotalSeconds(0)
  };

  return (
    <TimerContext.Provider value={{ totalSeconds, isTiming, startTimer, stopTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
