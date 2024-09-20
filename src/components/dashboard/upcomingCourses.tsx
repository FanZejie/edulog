import Image from "next/image";

const UpcomingCourses = () => {
  return (
    <div className="w-full flex flex-col p-4 gap-2">
      <div className="text-[#FF006E] font-bold text-xl">Upcoming Courses</div>
      <div className="bg-white w-full h-14 flex flex-row items-center">
        <Image src="/math.png" alt="math" width={40} height={40}/>
        <div className="flex flex-col ml-2">
            <div className="text-sm  font-semibold text-[#C8CDD6]">Math</div>
            <div className="text-xs text-[#615E83]">Discrete math for absolute beginners</div>
        </div>
      </div>
      <div className="bg-white w-full h-14 flex flex-row items-center">
        <Image src="/reading.png" alt="reading" width={40} height={40}/>
        <div className="flex flex-col ml-2">
            <div className="text-sm font-semibold text-[#C8CDD6]">Reading</div>
            <div className="text-xs text-[#615E83]">The Meditations of Marcus Aurelius</div>
        </div>
      </div>
      <div className="bg-white w-full h-14 flex flex-row items-center">
        <Image src="/writing.png" alt="writing" width={40} height={40}/>
        <div className="flex flex-col ml-2">
            <div className="text-sm font-semibold text-[#C8CDD6]">Writing</div>
            <div className="text-xs text-[#615E83]">Atlantis and the Younger Dryas</div>
        </div>
      </div>
    </div>
  )
};

export default UpcomingCourses;
