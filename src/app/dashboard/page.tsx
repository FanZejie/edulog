import AvatarWithLabel from "@/components/dashboard/avatarWithLabel";
import BackCard from "@/components/dashboard/backCard";

const Page = () => {
  return (
    <div className="flex flex-row my-10">
      <div className="w-2/3 h-full  flex flex-col">
        <div className="w-full h-[80px]  items-center flex">
          <AvatarWithLabel />
        </div>
        <div className="w-full h-[220px]">
          <BackCard/>
        </div>
        <div className="w-full h-[120px] bg-red-300">start recording xxxx</div>
        <div className="w-full h-[300px] bg-blue-300 flex flex-row">
          <div className="w-1/2 h-full bg-slate-300">left chart</div>
          <div className="w-1/2 h-full bg-stone-300">right chart</div>
        </div>
      </div>
      <div className="w-1/3 h-full bg-stone-400 flex flex-col">
        <div className="w-full h-[360px] bg-slate-300">top</div>
        <div className="w-full h-[360px] bg-blue-300">top</div>
      </div>
    </div>
  );
};

export default Page;
