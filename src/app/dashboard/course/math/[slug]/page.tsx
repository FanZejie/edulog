"use client";
import CountdownTimer from "@/components/course/countdownTimer";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Question = {
  question: string;
  answer: number;
  userAnswer: string;
  completed: boolean;
  correct: boolean | null; // null 表示未检查，true 表示正确，false 表示错误
};

const generateRandomQuestions = (count: number) => {
  const questions: Question[] = [];
  for (let i = 0; i < count; i++) {
    const num1 = Math.floor(Math.random() * 20);
    const num2 = Math.floor(Math.random() * 20);
    const isAddition = Math.random() > 0.5;
    const question = isAddition ? `${num1} + ${num2}` : `${num1} - ${num2}`;
    const answer = isAddition ? num1 + num2 : num1 - num2;
    questions.push({
      question,
      answer,
      userAnswer: "",
      completed: false,
      correct: null,
    });
  }
  return questions;
};
const Page = ({ params }: { params: { slug: string } }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [spendTimeStr, setSpendTimeStr] = useState(''); // 设置倒计时时间为60秒
  useEffect(() => {
    // 在页面加载时生成随机题目
    setQuestions(generateRandomQuestions(4)); // 假设生成4个问题
  }, []);

  // 更新用户输入
  const handleInputChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].userAnswer = value;
    updatedQuestions[index].completed = value !== "";
    setQuestions(updatedQuestions);
  };
  // 提交答案并检查是否正确
  const handleSubmit = () => {
    setIsSubmit(true); // 点击提交时暂停倒计时
    let wrong = 0;
    const updatedQuestions = questions.map((question) => {
      const isCorrect = parseInt(question.userAnswer) === question.answer;
      if (!isCorrect) {
        wrong++;
      }
      return {
        ...question,
        correct: isCorrect,
      };
    });
    setWrongCount(wrong);
    setQuestions(updatedQuestions);
  };

  // 倒计时结束时自动提交
  const handleTimeUp = (remainingTime: number) => {
    const spendTime = 300 - remainingTime;
    const minutes = Math.floor(spendTime / 60); // 计算分钟
const seconds = spendTime % 60; // 计算剩余秒数
const result = `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
setSpendTimeStr(result)
    handleSubmit();
  };

  const title = decodeURIComponent(params.slug);
  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="flex flex-col p-4 mt-4">
          {questions.map((q, index) => (
            <div key={index} className="flex flex-col mb-4">
              <h3 className="font-bold text-2xl">{`Question ${
                index + 1
              }: `}</h3>
              <div className="flex flex-row mt-4 items-center">
                <p className="font-semibold w-24 text-xl">{`${q.question} = `}</p>
                <input
                  type="text"
                  value={q.userAnswer}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="border b-2 rounded-lg px-4 py-1 ml-2 w-20 border-black"
                />

                {/* 显示正确或错误标志 */}
                {q.correct !== null && (
                  <img
                    src={q.correct ? "/right.png" : "/wrong.png"}
                    alt={q.correct ? "Correct" : "Incorrect"}
                    className="w-8 h-8 ml-2"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 未提交时按钮组 */}
        {!isSubmit && (
          <div className="w-full p-4">
            <button className="bg-[#EF6767] text-white py-2 px-16 rounded mt-4">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#69C43B] text-white py-2 px-16 rounded mt-4 ml-8">
              Submit
            </button>
          </div>
        )}

        {/* 已提交时按钮组 */}
        {isSubmit && (
          <div className="w-full flex flex-col">
            <div className="w-full ">
              <button className="bg-[#6188FF] text-white py-2 px-16 rounded mt-4">
                Try Again
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#69C43B] text-white py-2 px-16 rounded mt-4 ml-8">
                Back to Course
              </button>
            </div>
            <div className="w-full">
              <button
                onClick={handleSubmit}
                className="bg-[#FAA010] text-white py-2 w-[464px] flex items-center justify-center rounded mt-4  ">
                Jump to mistake book
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/3">
        {/* 右侧状态 */}
        <div className="w-full p-4">
          <div className="font-bold text-2xl">Time Left:</div>
          {/* 倒计时 */}
          <div className="mt-8">
            <CountdownTimer onTimeUp={handleTimeUp} isPaused={isSubmit} />
          </div>

          <h2 className="font-bold text-xl my-8">Question List</h2>
          <ul>
            {questions.map((q, index) => (
              <li
                key={index}
                className={cn(
                  q.completed ? "text-green-500" : "text-gray-500",
                  "my-2"
                )}>
                {`Question ${index + 1}: ${
                  q.completed ? "Completed" : "Not Completed"
                }`}
              </li>
            ))}
          </ul>
        </div>

        {isSubmit && (
          <div className="w-full p-4 flex flex-col items-left justify-center">
            <img src="/info.png" alt="info" className="w-20 h-20" />
            <h3 className="text-xl font-bold mt-4">{wrongCount} error</h3>
            <h3 className="text-xl font-bold mt-4">accuracy {((questions.length - wrongCount) / questions.length) * 100}%</h3>
            <h3 className="text-xl font-bold mt-4">
              time taken {spendTimeStr}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
