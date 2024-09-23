import QuestionCollapse from "@/components/mistakebook/questionCollapse";
import Image from "next/image";

const title = `Mistake Book`;
const Page = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="w-1/2 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <QuestionCollapse/>
      </div>
      <div className="w-1/2 flex flex-col gap-4 mt-12">
        <div className=" h-28 flex flex-row items-center">
          <Image
            className="ml-8"
            src="/search.png"
            alt="search"
            width={60}
            height={60}
          />
          <input className="ml-4 w-1/2 h-12 border-2 border-gray-400 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Page;
