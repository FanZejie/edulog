"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User } from "@/lib/type";

interface DetailPageProps {
  params: Record<string, string | undefined>;
  searchParams: Record<string, string | undefined>;
}

const Explanation = `An adventure is when you go on a fun and exciting journey, maybe to a new place or trying something you’ve never done before. It can be like going on a treasure hunt, exploring a forest, or even just playing a new game with friends. Adventures are full of surprises and can make you feel brave and curious!`;
const Example = `Lily went on an adventure with her family to the beach, where they found seashells and built a big sandcastle.`;
const DetailPage: React.FC<DetailPageProps> = ({ params, searchParams }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);



  const removeWord = async ()=>{
    // 发送数据到后端
    const userName = user?.userName
    const word = searchParams.practise
    const date = searchParams.date
    try {
      const response = await fetch('/api/deleteVocabularyWord', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName,word,date}),
      });

      if (!response.ok) {
        throw new Error('网络错误');
      }

      // 处理后端响应
      const result = await response.json();
      console.log('result',result)
      if(result.code == 0){
        router.push("/dashboard/vocabulary");
      }else{
        console.error('后端返回:', result.message);
      }
      
    } catch (error) {
      console.error('发送失败:', error);
    }
  }
  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-row w-2/3 justify-between">
        <h1 className="text-4xl font-bold">Vocabulary</h1>
        <Link
          href={"/dashboard/vocabulary/"}
          className="flex flex-row items-center gap-2">
          <Image src="/back.png" alt="back" width={60} height={60} />
          <span className="font-medium text-xl text-gray-600">back</span>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mt-4 pl-2">{searchParams.practise}</h2>

      <h3 className="text-xl font-semibold mt-8 pl-2">AI Explanation:</h3>
      <p className="w-2/3 pl-2 pt-2">{Explanation}</p>

      <h3 className="text-xl font-semibold mt-8 pl-2">AI Sentence Example: </h3>
      <p className="w-2/3 pl-2 pt-2">{Example}</p>

      <div className="flex flex-row justify-center mt-12 w-2/3">
        <button
          onClick={() => {
            removeWord()
          }}
          className="bg-[#EF6767] text-white font-bold py-2 w-[364px] flex items-center justify-center rounded  ">
          Remove Word
        </button>

        <button
          onClick={() => {
            router.push("/dashboard/smart-chat");
          }}
          className="bg-[#69C43B] text-white font-bold py-2 w-[364px] flex items-center justify-center rounded ml-4  ">
          Jump to Smart Chart
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
