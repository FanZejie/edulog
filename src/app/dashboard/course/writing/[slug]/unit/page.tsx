"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const Page = () => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string | string[] }>(); // 获取动态路由参数

  // 确保 slug 是字符串
  const title = Array.isArray(slug) ? slug[0] : slug; // 如果是数组，取第一个元素

  const decodedTitle = decodeURIComponent(title); // 解码

  const [example,setExample] = useState<string>('')
  const [feedback,setFeedback] = useState<string>('');
  const getAiFeedback = async (topic:string, content:string) => {
    try {
      const response = await fetch(
        "https://api.aiproxy.io/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer sk-5oT1t9spDu7dI2MuIGVsIfsoUafbtGM5gQXXg7zEpQBmcdVD", // 替换为你的 OpenAI 密钥
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  `You are a writing teacher. The essay topic is as follows: ${topic}. I will give you a paragraph. you need to give me some feedback and how to write it better.`,
              },
              {
                role: "user",
                content: content,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      setFeedback(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const getAiSample = async (topic:string, content:string) => {
    try {
      const response = await fetch(
        "https://api.aiproxy.io/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer sk-5oT1t9spDu7dI2MuIGVsIfsoUafbtGM5gQXXg7zEpQBmcdVD", // 替换为你的 OpenAI 密钥
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  `You are a writing teacher. The essay topic is as follows: ${topic}. I will give you a paragraph. you need to give me a better sample.`,
              },
              {
                role: "user",
                content: content,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      setExample(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // 从 sessionStorage 中获取数据
    const storedAnswer = sessionStorage.getItem('userAnswer');
    if (storedAnswer) {
      getAiFeedback('Think of a memory that you remember vividly',storedAnswer)
      getAiSample('Think of a memory that you remember vividly',storedAnswer)
    }
  }, []);

  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{decodedTitle}</h1>
        <h3 className="text-2xl font-semibold mt-4">AI feedback:</h3>
        <p className="w-3/4">{feedback}</p>

        <h3 className="text-2xl font-semibold mt-4">AI Sample:</h3>
        <p className="w-3/4">{example}</p>

        <div className="w-full p-4">
          <button
            onClick={() => {
                router.back();
            }}
            className="bg-[#6188FF] text-white py-2 px-16 rounded mt-4 font-bold">
            Try Again
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

export default Page;
