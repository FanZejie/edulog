"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { User } from "@/lib/type";
import { getCurrentDate } from "@/lib/utils";

const UnitPage = () => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string | string[] }>(); // 获取动态路由参数
  const word = ['adventure', 'certainly', 'curious']
  // 确保 slug 是字符串
  const title = Array.isArray(slug) ? slug[0] : slug; // 如果是数组，取第一个元素
  const decodedTitle = decodeURIComponent(title); // 解码
  // 使用数组保存复选框的选中状态，初始值为 false 表示都未选中
  const [checkedTests, setCheckedTests] = useState<boolean[]>(new Array(3).fill(false));
  // 处理复选框变化的函数
  const handleCheckboxChange = (index: number) => {
    const updatedCheckedTests = [...checkedTests];
    updatedCheckedTests[index] = !updatedCheckedTests[index]; // 切换选中状态
    setCheckedTests(updatedCheckedTests);
  }
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleAdd = async () => {
    const userName = user?.userName
    const unit = decodedTitle
    const date = getCurrentDate()
    const questions = []
    for(let i=0;i<checkedTests.length;i++){
      if(checkedTests[i]){
        questions.push(word[i])
      }
    }

     // 发送数据到后端
     try {
      const response = await fetch('/api/addToVocabulary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ unit,userName,questions,date }),
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

  }
  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{decodedTitle}</h1>
        <div className="flex flex-row gap-4 mt-8">
          <input
            type="checkbox"
            checked={checkedTests[0]}
            onChange={() => handleCheckboxChange(0)}  // 传递当前索引
            className="w-6 h-6 mt-1"
          />
          <div>
            <h1 className="text-2xl font-semibold">
              {`Word:adventure (noun)`}
            </h1>
            <ul className="list-disc pl-8 text-xl pt-2">
              <li>Definition: an exciting experience</li>
              <li>
                Sample Sentence: The magic carpet took Jamal on an adventure to
                faraway lands.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <input
            type="checkbox"
            checked={checkedTests[1]}
            onChange={() => handleCheckboxChange(1)}  // 传递当前索引
            className="w-6 h-6 mt-1"
          />
          <div>
            <h1 className="text-2xl font-semibold">
              {`Word:certainly (adverb)`}
            </h1>
            <ul className="list-disc pl-8 text-xl pt-2">
              <li>Definition: an exciting experience</li>
              <li>
                Sample Sentence: The magic carpet took Jamal on an adventure to
                faraway lands.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <input
            type="checkbox"
            checked={checkedTests[2]}
            onChange={() => handleCheckboxChange(2)}  // 传递当前索引
            className="w-6 h-6 mt-1"
          />
          <div>
            <h1 className="text-2xl font-semibold">
              {`Word: curious (adjective)`}
            </h1>
            <ul className="list-disc pl-8 text-xl pt-2">
              <li>Definition: an exciting experience</li>
              <li>
                Sample Sentence: The magic carpet took Jamal on an adventure to
                faraway lands.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full p-4">
          <button
            onClick={handleAdd}
            className="bg-[#6C7B49] text-white py-2 px-16 rounded mt-4 font-bold">
            Add to Vocabulary
          </button>
          <button
            onClick={() => {
              router.push("/dashboard/course");
            }}
            className="bg-[#1EE76E] text-white py-2 px-16 rounded mt-4 ml-8 font-bold">
            Back to Cousre
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
