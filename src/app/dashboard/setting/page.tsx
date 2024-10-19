"use client";
import Image from "next/image";
import { Input, Select } from "antd";
import { User } from "@/lib/type";
import { useState, useEffect } from 'react';


const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      console.log('storedUser',storedUser)
      if (storedUser) {
        console.log('ssss',JSON.parse(storedUser))
        setUser(JSON.parse(storedUser));
        console.log('user',user)
      }
     
    }
  }, []);// 空数组表示只在组件挂载时运行

  // 在 user 变化时打印它
  // useEffect(() => {
  //   if (user) {
  //     console.log('Updated user:', user);
  //   }
  // }, [user]);

   // 更新 userName 值
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({ ...user, userName: e.target.value });
    }
  };
  const handleChangeGrade = (value: string) => {
    if (user) {
      setUser({ ...user, grade: value });
    }
  };
  const handleChangeLevel = (value: string) => {
    if (user) {
      setUser({ ...user, level: value });
    }
  };


  return (
    <div className="flex flex-col pt-20 gap-8 pl-20">
      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Avator:</div>
        <Image src={"/avatar.png"} alt="avatar" width={60} height={60} />
      </div>

      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Name:</div>
        {user ? (
        <Input
          value={user.userName} // 使用 value 进行双向绑定
          onChange={handleInputChange} // 更新 userName
          className="w-[200px]"
        />
      ) : (
        <p>Loading user...</p>
      )}
      </div>

      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Grade:</div>
        {user ? (
        <Select
          value={user.grade} // 动态绑定用户的 grade
          style={{ width: 200 }}
          onChange={handleChangeGrade} // 更新 grade
          options={[
            { value: "first grade", label: "first grade" },
            { value: "second grade", label: "second grade" },
            { value: "third grade", label: "third grade" },
          ]}
        />
      ) : (
        <p>Loading grade...</p>
      )}
      </div>

      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Difficulty:</div>
        {user ? (
        <Select
          value={user.level} // 动态绑定用户的 grade
          style={{ width: 200 }}
          onChange={handleChangeLevel} // 更新 grade
          options={[
            { value: "easy", label: "easy" },
            { value: "medium", label: "medium" },
            { value: "hard", label: "hard" },
          ]}
        />
      ) : (
        <p>Loading grade...</p>
      )}
      </div>

      <div className="flex flex-row items-center gap-4">
        <button className="bg-[#EF6767] text-white font-bold py-2  w-[100px] flex items-center justify-center rounded">
          cancel
        </button>
        <button className="bg-[#69C43B]  text-white font-bold py-2  w-[100px] flex items-center justify-center rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
