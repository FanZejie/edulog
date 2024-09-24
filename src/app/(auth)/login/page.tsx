import Image from "next/image";
import Link from "next/link"; // Import the Link component
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" bg-white rounded-lg shadow-md flex flex-row">
        <div className=" relative bg-[url('/homebg.png')] w-[230px] h-[402px] bg-cover bg-center">
          <Image
            src="/signupImg.png"
            alt="people"
            height={402}
            width={200}
            className="absolute bottom-2 left-2"
          />
        </div>
        <div className="w-[440px] flex flex-col  items-center">
          <div className="flex flex-row justify-center items-center pt-4 relative w-full">
            <div className="text-2xl font-bold ">Sign In</div>
            <Link href={'/'} className="text-sm text-[#293677] font-bold absolute right-2 top-6">{`< back`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
