import Image from "next/image";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-1/2 flex flex-row justify-between items-center  mt-8 relative">
        <div className="font-extrabold text-3xl">
          <div>First Grade</div>
          <div className="mt-1">Math</div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-2">
            <Image src="/back.png" alt="back" width={60} height={60} />

            <span className="font-medium text-xl text-gray-600">back</span>
          </div>
        </div>

        <Image
          src="/mathHuman.png"
          alt="human"
          width={400}
          height={400}
          className="absolute top-[-100px] right-[-420px]"
        />
      </div>

      <div className="w-1/2 h-28 mt-4 flex flex-row items-center">
        <div className="text-xl">Course Search</div>
        <Image className="ml-8" src="/search.png" alt="search" width={60} height={60} />
        <input className="ml-4 w-1/2 h-12 border-2 border-gray-400 rounded-2xl" />
      </div>
      <div className="">checkbox</div>
    </div>
  );
};

export default Page;
