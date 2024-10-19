'user client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from 'react';
import { User } from "@/lib/type";



const AvatarWithLabel = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);// 空数组表示只在组件挂载时运行
  return (
    <div className="flex flex-row items-center">
      <Avatar className="w-[60px] h-[60px]">
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-4 ">
        <div className="font-bold text-xl">{ user?.userName}</div>
        <div className="font-light text-gray-500">{user?.grade}</div>
      </div>
    </div>
  );
};

export default AvatarWithLabel;
