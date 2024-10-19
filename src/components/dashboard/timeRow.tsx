'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@/lib/type";



const TimeRow = () => {
  const [isTiming, setIsTiming] = useState(false); // 控制计时状态
  const [totalSeconds, setTotalSeconds] = useState(() => {
    // 从 localStorage 获取已保存的计时值，初始为0
    const savedTime = localStorage.getItem("totalSeconds");
    return savedTime ? parseInt(savedTime) : 0;
  });
  const [user, setUser] = useState<User | null>(null);

  // 将总秒数格式化为分:秒
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);// 空数组表示只在组件挂载时运行

  useEffect(() => {
    // 从 localStorage 获取已保存的计时值
    const savedTime = localStorage.getItem("totalSeconds");
    if (savedTime) {
      setTotalSeconds(parseInt(savedTime));
    }
  }, []);

   // 使用 useEffect 处理计时
   useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isTiming) {
      timer = setInterval(() => {
        setTotalSeconds((prev) => {
          const newTotal = prev + 1;
          localStorage.setItem("totalSeconds", newTotal.toString()); // 每秒更新 localStorage
          return newTotal; // 更新总秒数
        });
      }, 1000); // 1000ms = 1秒
    } else if (!isTiming && timer) {
      clearInterval(timer); // 停止计时
    }

    return () => {
      if (timer) clearInterval(timer); // 清理计时器
    };
  }, [isTiming]);

  // 处理开始计时
  const handleStart = () => {
    setIsTiming(true);
  };

   // 处理停止计时并发送数据到后端
   const handleStop = async () => {
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
    localStorage.removeItem("totalSeconds");
  };

  

  return (
    <div className="flex flex-row items-center  w-full ">
      <span className="font-bold text-lg">Start recording your study time today:</span>
      <Image className="ml-4 cursor-pointer" src="/goImg.png" width={60} height={60} alt="go" onClick={handleStart} />
      <Image className="ml-4 cursor-pointer" src="/stopImg.png" width={60} height={60} alt="stop"  onClick={handleStop} />

      <div className="text-6xl font-semibold px-8 py-2 ml-4 bg-[#f0f0f0] rounded-xl">  {formatTime(totalSeconds)} {/* 显示格式化后的时间 */}</div>
    </div>
  )
};

export default TimeRow;
