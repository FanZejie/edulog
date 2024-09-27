"use client";
import CountdownTimer from "@/components/course/countdownTimer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const text = `Think of a memory that you remember vividly. It should be a memory that comes easily to you.
Why do you think you remember this so well? Try connecting one or more emotions to this memory.
Now try and express your memory and emotion in some way. The goal is to get it out of your head.
Write your memory in less than a page. Do the emotions come out in your words?`;
const Page = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const title = decodeURIComponent(params.slug).substring(8);

  const [isSubmit, setIsSubmit] = useState(false);
  const [input, setInput] = useState("");

  const handleTimeUp = () => {
    setIsSubmit(true);
  };
  const handleSubmit = () => {
    // 将用户输入存储到 sessionStorage
    sessionStorage.setItem("userAnswer", input);

    router.push(`/dashboard/course/writing/${title}/unit`);
  };
  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="w-3/4 text-lg p-4 mt-4">{text}</p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-3/4 h-[200px] border p-1"
          placeholder="Type your answer here."
        />

        <div className="w-full p-4">
          <button
            onClick={() => {
              router.push("/dashboard/course/writing");
            }}
            className="bg-[#EF6767] text-white py-2 px-16 rounded mt-4">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#69C43B] text-white py-2 px-16 rounded mt-4 ml-8">
            AI Score
          </button>
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-full p-4">
          <div className="font-bold text-2xl">Time Left:</div>
          {/* 倒计时 */}
          <div className="mt-8">
            <CountdownTimer onTimeUp={handleTimeUp} isPaused={isSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
