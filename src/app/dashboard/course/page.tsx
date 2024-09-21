import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className=" h-full w-full flex flex-row">
      <div className="w-1/2 flex flex-col pt-20 ">
        <div className="flex flex-row ">
          <Image
            src="/courseOption.png"
            width={100}
            height={100}
            alt="courseOptionImg"
          />
          <div className="text-2xl font-bold flex items-center ml-4">
            Course Options
          </div>
        </div>

        <div className="flex flex-row ml-8 mt-10">
          <Image src="/math.png" width={50} height={50} alt="math" />
          <Link href={"/dashboard/course/math"} className=" w-2/3 text-2xl font-bold flex items-center justify-center ml-8 py-2  bg-[#EEB918] text-white rounded-lg ">
            Math
          </Link>
        </div>

        <div className="flex flex-row ml-8 mt-10">
          <Image src="/reading.png" width={50} height={50} alt="reading" />
          <Link href={"/dashboard/course/reading"} className=" w-2/3 text-2xl font-bold flex items-center justify-center ml-8 py-2  bg-[#FF6410] text-white rounded-lg ">
            Reading
          </Link>
        </div>

        <div className="flex flex-row ml-8 mt-10">
          <Image src="/writing.png" width={50} height={50} alt="writing" />
          <div className="w-2/3  text-2xl font-bold flex items-center justify-center ml-8 py-2  bg-[#3C176E] text-white rounded-lg ">
            Writing
          </div>
        </div>
      </div>
      <div className="w-1/2  flex flex-col pt-10 ">
        <div className="flex flex-col justify-center ml-12">
          <div className="font-extrabold text-4xl">Hello Jane</div>
          <div className="font-extrabold text-4xl mt-2 mb-14">Let&apos;s Start</div>
        </div>
        <Image src="/courseHuman.png" alt="girl" width={306} height={329}/>
      </div>
    </div>
  );
};

export default Page;
