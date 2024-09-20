import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
const Page = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-1/2 flex flex-row justify-between items-center  mt-8 relative">
        <div className="font-extrabold text-3xl">
          <div>First Grade</div>
          <div className="mt-1">Math</div>
        </div>
        <div>
          <Link href={'/dashboard/course/'} className="flex flex-row items-center gap-2">
            <Image src="/back.png" alt="back" width={60} height={60} />
            <span className="font-medium text-xl text-gray-600">back</span>
          </Link>
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
        <Image
          className="ml-8"
          src="/search.png"
          alt="search"
          width={60}
          height={60}
        />
        <input className="ml-4 w-1/2 h-12 border-2 border-gray-400 rounded-2xl" />
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center">
          <Checkbox />
          <Link href={'/dashboard/course/math/unit1'} className="text-xl font-bold ml-4">
            Unit 1: Add and subtract within 20
          </Link>
        </div>

        <div className="flex flex-row items-center mt-8">
          <Checkbox />
          <Link href={'/dashboard/course/math/unit2'} className="text-xl font-bold ml-4">
            Unit 2: Place value
          </Link>
        </div>

        <div className="flex flex-row items-center mt-8">
          <Checkbox />
          <Link href={'/dashboard/course/math/unit3'} className="text-xl font-bold ml-4">
          Unit 3: Add and subtract within 100
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
