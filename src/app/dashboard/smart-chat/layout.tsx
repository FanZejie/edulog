'use client'
import { useEffect, useState } from 'react';
import AvatarWithLabel from "@/components/dashboard/avatarWithLabel";
import Image from "next/image";
import { User } from "@/lib/type";
export default function TextbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
    <>
      <div className="flex flex-col h-screen">
        <div className="pt-10">
          <AvatarWithLabel />
        </div>
        <div className="pt-4 flex flex-row items-center justify-start">
        <Image  src="/chat.png" alt="send" width={60} height={60} />
        <h1>Hello,{user?.userName}. You can ask me any questions.</h1>
        </div>
        <div className="w-full">
        {children}
        </div>
      
      </div>
    </>
  );
}
