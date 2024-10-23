"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface DetailPageProps {
  params: Record<string, string | undefined>;
  searchParams: Record<string, string | undefined>;
}
interface BackendQuestion {
  question: string;
}

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

const DetailPage: React.FC<DetailPageProps> = ({ params, searchParams }) => {

  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [errorQuestions,setErrorQuestions] = useState<Question[]>([]);
  useEffect(() => {
    // 在页面加载时生成随机题目
    
    const fetchData = async () => {
      // 你的异步操作
      const response = await fetch(`/api/getMistakeQuestions?unit=unit1&date=2024-10-21`);
      if(response.ok){
        const {data} = await response.json();
        console.log('data',data)
        const questionsRes : Question[] = data.map((item: BackendQuestion) => {
          const [expr, userAnswer] = item.question.split('=');
          
          // 计算正确的答案
          const answer = eval(expr); // 注意：eval 存在安全隐患，实际使用中要谨慎
        
          return {
            question: expr.trim(),
            answer,
            userAnswer: userAnswer ? userAnswer.trim() : '',
            completed: true,
            correct: false, // 初始状态为未检查
          };
        });
        setQuestions(questionsRes)
        setErrorQuestions(questionsRes)
      }else{
        console.error("提交失败");
      }
    }
    fetchData();
  }, []);

   // 更新用户输入
   const handleInputChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].userAnswer = value;
    updatedQuestions[index].completed = value !== "";
    setQuestions(updatedQuestions);
  };

  const handleRedo = ()=>{
    // 创建 errorQuestions 的深拷贝
  let copy = errorQuestions.map(q => ({
    ...q, // 扩展原对象
    correct: null,
    userAnswer: ''
  }));
    setQuestions(copy)
  }

  const handleSubmit = ()=>{
    const updatedQuestions = questions.map((question) => {
      const isCorrect = parseInt(question.userAnswer) === question.answer;
      return {
        ...question,
        correct: isCorrect,
      };
    });

    setQuestions(updatedQuestions);
  }

  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">Mistake Book</h1>
        <h2 className="text-2xl font-bold mt-4 pl-2">
          {searchParams.practise}
        </h2>

        <div className="flex flex-col p-4">
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

        <div className="flex flex-col">
        <button
                onClick={handleRedo}
                className="bg-[#6188FF] text-white font-bold py-2 w-[464px] flex items-center justify-center rounded mt-4  ">
                Redo Incorrect Questions
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#4fc347] text-white font-bold py-2 w-[464px] flex items-center justify-center rounded mt-4  ">
                Submit
              </button>
              <button
                onClick={() => {
                  router.push("/dashboard/smart-chat");
                }}
                className="bg-[#1EE76E] text-white font-bold py-2 w-[464px] flex items-center justify-center rounded mt-4  ">
                Jump to the Smart Chat
              </button>
        <button
                onClick={() => {
                  setQuestions(generateRandomQuestions(4)); // 假设生成4个问题
                }}
                className="bg-[#FAA010] text-white font-bold py-2 w-[464px] flex items-center justify-center rounded mt-4  ">
                Generate Similar Question Types
              </button>

        </div>

      </div>
    </div>
  );
};

export default DetailPage;
