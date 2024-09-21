"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const feedBackText = `Think of a memory that you remember vividly. It should be a memory that comes easily to you.
Why do you think you remember this so well? Try connecting one or more emotions to this memory.
Now try and express your memory and emotion in some way. The goal is to get it out of your head.
Write your memory in less than a page. Do the emotions come out in your words`

const Page = () => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string | string[] }>(); // 获取动态路由参数

  // 确保 slug 是字符串
  const title = Array.isArray(slug) ? slug[0] : slug; // 如果是数组，取第一个元素

  const decodedTitle = decodeURIComponent(title); // 解码

  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{decodedTitle}</h1>
        <h3 className="text-2xl font-semibold mt-4">AI feedback:</h3>
        <p className="w-3/4">{feedBackText}</p>

        <h3 className="text-2xl font-semibold mt-4">AI Sample:</h3>
        <p className="w-3/4">{feedBackText}</p>

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
