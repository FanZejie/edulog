import Image from "next/image";

const TimeRow = () => {
  return (
    <div className="flex flex-row items-center  w-full ">
      <span className="font-bold text-lg">Start recording your study time today:</span>
      <Image className="ml-4" src="/goImg.png" width={60} height={60} alt="go" />
      <Image className="ml-4" src="/stopImg.png" width={60} height={60} alt="go" />

      <div className="text-6xl font-semibold px-8 py-2 ml-4 bg-[#f0f0f0] rounded-xl">01:31</div>
    </div>
  )
};

export default TimeRow;
