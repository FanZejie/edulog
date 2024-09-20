import Image from "next/image";

const BackCard = () => {
  return (
    <div className="flex flex-row w-full h-full bg-[#0077FF] rounded-xl relative">
      <div className="flex flex-col w-full h-full ">
        <div className="text-white text-4xl font-bold p-8 flex flex-row">Welcome back, Jane
            <Image src="/helloHand.png" alt="helloHand" width={38} height={38} className="ml-2"/>
        </div>
        <div className="text-white pl-8 flex flex-row">You have studied <span className="font-bold pl-1 pr-1">10.5</span> hours this week.</div>
        <div className="text-white pl-8">Keep going!</div>
        <div className="text-white pl-8">I recommend you continue studying <span className="font-bold pl-1 pr-1">Math</span>.</div>
      </div>
      
        <Image src="/backCardHuman.png" alt="backCard" width={320} height={300} className=" absolute right-4 top-0"/>
    
    </div>
  )
};

export default BackCard;
