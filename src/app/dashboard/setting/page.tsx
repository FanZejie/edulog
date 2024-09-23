"use client";
import Image from "next/image";
import { Input, Select } from "antd";

const Page = () => {
  const handleChangeGrade = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-col pt-20 gap-8 pl-20">
      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Avator:</div>
        <Image src={"/avatar.png"} alt="avatar" width={60} height={60} />
      </div>

      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Name:</div>
        <Input defaultValue="Jane" className="w-[200px]" />
      </div>

      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Grade:</div>
        <Select
          defaultValue="first grade"
          style={{ width: 200 }}
          onChange={handleChangeGrade}
          options={[
            { value: "first grade", label: "first grade" },
            { value: "second grade", label: "second grade" },
            { value: "third grade", label: "third grade" },
          ]}
        />
      </div>

      <div className="flex flex-row items-center">
        <div className="w-32 font-bold text-2xl">Difficulty:</div>
        <Select
          defaultValue="easy"
          style={{ width: 200 }}
          onChange={handleChangeGrade}
          options={[
            { value: "easy", label: "easy" },
            { value: "middle", label: "middle" },
            { value: "hard", label: "hard" },
          ]}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <button className="bg-[#EF6767] text-white font-bold py-2  w-[100px] flex items-center justify-center rounded">
          cancel
        </button>
        <button className="bg-[#69C43B]  text-white font-bold py-2  w-[100px] flex items-center justify-center rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
