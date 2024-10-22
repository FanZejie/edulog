'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { User } from "@/lib/type";

const Page = () => {
   // 模拟从后端获取的数组
   const ans = [
    {
      title: "Unit 1: Expressing memories",
    }
  ];

  const tests = [
    {
      title: "Unit 1: Expressing memories",
    }
  ]
  // 模拟从后端获取的数组
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);// 空数组表示只在组件挂载时运行
  
   // 使用数组保存复选框的选中状态，初始值为 false 表示都未选中
   const [checkedTests, setCheckedTests] = useState<boolean[]>(new Array(tests.length).fill(false));

   // 处理复选框变化的函数
  const handleCheckboxChange = async (index: number) => {
    const updatedCheckedTests = [...checkedTests];
    updatedCheckedTests[index] = !updatedCheckedTests[index]; // 切换选中状态
    setCheckedTests(updatedCheckedTests);

    // 计算选中的复选框数量
    const selectedCount = updatedCheckedTests.filter((checked) => checked).length;
    const course = 'writing'
    const userName = user?.userName

    // 发送数据到后端
    try {
      const response = await fetch('/api/setCourseStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completeNum:selectedCount,course,userName }),
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
  };
  
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-1/2 flex flex-row justify-between items-center  mt-8 relative">
        <div className="font-extrabold text-3xl">
          <div>First Grade</div>
          <div className="mt-1">Writing</div>
        </div>
        <div>
          <Link href={'/dashboard/course/'} className="flex flex-row items-center gap-2">
            <Image src="/back.png" alt="back" width={60} height={60} />
            <span className="font-medium text-xl text-gray-600">back</span>
          </Link>
        </div>

        <Image
          src="/readingPic.png"
          alt="readingPic"
          width={400}
          height={400}
          className="absolute top-[-100px] right-[-420px]"
        />
      </div>

      <div className="w-1/2 h-28 mt-4 flex flex-row items-center">
        <div className="text-xl">Course Search</div>
        <Image
          className="ml-8"
          src="/search.png"
          alt="search"
          width={60}
          height={60}
        />
        <input className="ml-4 w-1/2 h-12 border-2 border-gray-400 rounded-2xl" />
      </div>
      <div className="flex flex-col">
        {tests.map((test, index) => (
        <div className="flex flex-row items-center mt-8" key={index}>
          <input
            type="checkbox"
            checked={checkedTests[index]}
            onChange={() => handleCheckboxChange(index)}  // 传递当前索引
            className="w-6 h-6 p-4"
          />
          <Link 
            href={`/dashboard/course/writing/${encodeURIComponent(test.title)}`} 
            className="text-xl font-bold ml-4"
          >
            {test.title}
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Page;
