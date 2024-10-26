'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import { HomeData } from "@/lib/type";
import { User } from "@/lib/type";
type BackCardProps = {
  homeData: HomeData; // 接收整个 homeData 对象
};

const BackCard = ({homeData} : BackCardProps) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);// 空数组表示只在组件挂载时运行
  return (
    <div className="flex flex-row w-full h-full bg-[#0077FF] rounded-xl relative">
      <div className="flex flex-col w-full h-full ">
        <div className="text-white text-4xl font-bold p-8 flex flex-row">Welcome back, {user?.userName}
            <Image src="/helloHand.png" alt="helloHand" width={38} height={38} className="ml-2"/>
        </div>
        <div className="text-white pl-8 flex flex-row">You have studied <span className="font-bold pl-1 pr-1">{homeData.studyTime ? homeData.studyTime : 0}</span> this week.</div>
        <div className="text-white pl-8">Keep going!</div>
        <div className="text-white pl-8">I recommend you continue studying <span className="font-bold pl-1 pr-1">{homeData.recommendCourse}</span>.</div>
      </div>
      
        <Image src="/backCardHuman.png" alt="backCard" width={320} height={300} className=" absolute right-4 top-0"/>
    
    </div>
  )
};

export default BackCard;
