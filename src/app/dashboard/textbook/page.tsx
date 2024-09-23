import Image from "next/image";
import QuestionCollapse from "@/components/textbook/questionCollapse";
const title = `Textbook Guidance`;
const Page = () => {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="flex flex-row items-center ml-4">
          <Image
            className="ml-8"
            src="/search.png"
            alt="search"
            width={60}
            height={60}
          />
          <input className="ml-4 w-[240px] h-12 border-2 border-gray-400 rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-row w-full mt-12">
        <div className="w-1/3 flex flex-col items-center">
          <div className="font-bold text-2xl">Official Textbook</div>
          <button className="bg-[#EEB918] text-white font-bold py-2 w-[200px] flex items-center justify-center rounded mt-8  ">
            Math
          </button>
          <button className="bg-[#FF6410] text-white font-bold py-2 w-[200px] flex items-center justify-center rounded mt-8  ">
            Math
          </button>
          <button className="bg-[#3C176E] text-white font-bold py-2 w-[200px] flex items-center justify-center rounded mt-8  ">
            Math
          </button>
        </div>
        <div className="w-[2px] h-[200px] bg-gray-300 mt-8"></div>
        <div className="w-1/3 ml-8 flex flex-col">
          <div className="text-2xl font-bold mb-8"> Uploaded Textbook</div>
          <QuestionCollapse />
        </div>
      </div>
    </div>
  );
};

export default Page;
