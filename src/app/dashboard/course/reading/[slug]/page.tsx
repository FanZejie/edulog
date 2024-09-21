"use client";
import { useRouter } from "next/navigation";

const text = `How would you tell your own version of your favorite fairytale?
          There’s a lot we can learn about classic stories by writing different
          versions of them. What did the other characters think, and why was the
          villain bad? What if the story took place in a big city or in outer
          space? What happens after the characters live happily ever after?
          These are the kinds of questions we’ll be exploring in this unit.`;
const Page = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const title = decodeURIComponent(params.slug).substring(8);
  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="w-2/3 text-lg p-4 mt-4">{text}</p>

        <div className="w-full p-4">
          <button
            onClick={() => {
              router.push(`/dashboard/course/reading/${title}/unit`);
            }}
            className="bg-[#6188FF] text-white py-2 px-16 rounded mt-4 font-bold">
            Unit Vocabulary
          </button>
          <button
            onClick={() => {
                router.push("/dashboard/course/reading");
            }}
            className="bg-[#69C43B] text-white py-2 px-16 rounded mt-4 ml-8 font-bold">
            Back to Cousre
          </button>
        </div>
      </div>

      <div className="w-1/3 flex flex-col mt-12 pr-20"> 
            <div className="font-bold text-2xl">Thinking Questions:</div>
            <div className="text-xl mt-8 font-semibold">Question 1:</div>
            <p className="text-lg ">Have you ever heard two people each tell the same story?</p>
            <ul className="list-disc pl-8">
                <li>How was it similar?</li>
                <li>How was it different?</li>
            </ul>
      </div>
    </div>
  );
};

export default Page;
