'use client'
import AvatarWithLabel from "@/components/dashboard/avatarWithLabel";
import BackCard from "@/components/dashboard/backCard";
import CompletionCourses from "@/components/dashboard/completionCourses";
import Schedule from "@/components/dashboard/schedule";
import StudyTime from "@/components/dashboard/studyTime";
import TimeRow from "@/components/dashboard/timeRow";
import UpcomingCourses from "@/components/dashboard/upcomingCourses";
import { useState, useEffect } from 'react';
import { HomeData } from "@/lib/type";

const initHomePageData = async (userName: string): Promise<HomeData | null> => {
  try {
    const response = await fetch(`/api/getHomeData?username=${userName}`);
    if (response.ok) {
      const data = await response.json();
      return data.data
    } else {
      console.error("提交失败");
      return null
    }
  } catch (error) {
    console.error("请求出错:", error);
    return null
  }
}

const Page = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          const res = await initHomePageData(user.userName); // 等待 Promise 解析
          setHomeData(res || null); // 设置解析后的数据
        }
      }
    };

    fetchData();

  }, []); // 空数组表示只在组件挂载时运行
  console.log('homedata',homeData)
  return (
    <div className="flex flex-row my-10">
      <div className="w-2/3 h-full  flex flex-col">
        <div className="w-full h-[80px]  items-center flex">
          <AvatarWithLabel />
        </div>
        <div className="w-full h-[220px]">
          {homeData ?  <BackCard homeData={homeData}/> : <></>}
        </div>
        <div className="w-full h-[120px] flex flex-col justify-center">
          <TimeRow />
        </div>
        <div className="w-full h-[300px] flex flex-row">
          <div className="w-2/5 h-full ">
          {homeData ?  <CompletionCourses homeData={homeData}/> : <></>}
            
          </div>
          <div className="w-3/5 h-full ">
            <StudyTime  chartData={homeData?.studyTimeByMonth || []}/>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col ml-16">
        <div className="w-full h-[360px] ">
          <Schedule />
        </div>
        <div className="w-full h-[360px] bg-slate-50">
          <UpcomingCourses />
        </div>
      </div>
    </div>
  );
};

export default Page;
