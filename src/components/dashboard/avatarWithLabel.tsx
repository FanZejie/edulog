import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarWithLabel = () => {
  return (
    <div className="flex flex-row items-center">
      <Avatar className="w-[60px] h-[60px]">
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-4 ">
        <div className="font-bold text-xl">Jane</div>
        <div className="font-light text-gray-500">First Grade</div>
      </div>
    </div>
  );
};

export default AvatarWithLabel;
