'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Page = () => {
   // 模拟从后端获取的数组
   const ans = [
    {
      title: "Unit 1: Add and subtract within 20",
    },
    {
      title: "Unit 2: Add and subtract within 100",
    },
  ];

  const tests = [
    {
      title: "Unit 1: Add and subtract within 20",
    },
    {
      title: "Unit 2: Add and subtract within 100",
    },
    {
      title: "Unit 3: Decomposing numbers",
    }
  ]
  // 创建状态来保存选中的单元
  const [checkedUnits, setCheckedUnits] = useState<boolean[]>([]);
   // 在组件加载时，比较 ans 和 tests，并设置复选框状态
   useEffect(() => {
    const initialChecked = tests.map((test) => 
      ans.some((a) => a.title === test.title) // 如果 ans 中有相同的 title，则选中
    );
     // 只有当新的选中状态与当前状态不同的时候才更新状态
     if (JSON.stringify(initialChecked) !== JSON.stringify(checkedUnits)) {
      setCheckedUnits(initialChecked);
    }
    setCheckedUnits(initialChecked);
  }, []);
  
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-1/2 flex flex-row justify-between items-center  mt-8 relative">
        <div className="font-extrabold text-3xl">
          <div>First Grade</div>
          <div className="mt-1">Math</div>
        </div>
        <div>
          <Link href={'/dashboard/course/'} className="flex flex-row items-center gap-2">
            <Image src="/back.png" alt="back" width={60} height={60} />
            <span className="font-medium text-xl text-gray-600">back</span>
          </Link>
        </div>

        <Image
          src="/mathHuman.png"
          alt="human"
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
            checked={checkedUnits[index]} // 根据状态决定是否打钩
            onChange={() => {}}
            className="w-6 h-6 p-4"
          />
          <Link 
            href={`/dashboard/course/math/${encodeURIComponent(test.title)}`} 
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
