import AvatarWithLabel from "@/components/dashboard/avatarWithLabel";
import BackCard from "@/components/dashboard/backCard";
import CompletionCourses from "@/components/dashboard/completionCourses";
import TimeRow from "@/components/dashboard/timeRow";

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
        <div className="w-full h-[120px] flex flex-col justify-center">
          <TimeRow/>
        </div>
        <div className="w-full h-[300px] flex flex-row">
          <div className="w-2/5 h-full ">
            <CompletionCourses/>
          </div>
          <div className="w-3/5 h-full bg-stone-300">right chart</div>
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
