import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" bg-white rounded-lg shadow-md flex flex-row">
      <div className=" relative bg-[url('/homebg.png')] w-[230px] h-[402px] bg-cover bg-center">
      <Image src="/homePeople.png" alt="people" height={402} width={200} className="absolute bottom-2 left-2"/>
      </div>
        <div className="w-[300px] flex flex-col  items-center">
          <div className="text-2xl font-bold pt-10 pb-4">Welcome to XXX</div>
          <div className="w-3/4 h-[3px] bg-[#293577]"></div>
          {/* <Button className="mt-20 w-2/3">Sign Up</Button> */}
          <Link href="/signup" className="w-2/3  mt-20"><Button className="mt-4 w-full bg-[#293776] text-[#b8dce8] font-bold text-xl">Sign Up</Button></Link>
          <Link href="/login" className="w-2/3  mt-4"><Button className="mt-4 w-full  bg-[#b8dce8] text-[#293776] font-bold text-xl">Sign In</Button></Link>
          
        </div>
       
      </div>
    </div>
  );
}
