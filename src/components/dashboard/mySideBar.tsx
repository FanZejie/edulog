"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { House,UsersRound,NotepadText,BookmarkMinus,MessageSquare,MessageCircleMore,Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function MySidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      label: "Home",
      href: "/dashboard",
      icon: (
        <House className="h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Course",
      href: "/dashboard/course",
      icon: (
        <UsersRound  className="h-5 w-5 flex-shrink-0"/>
      ),
    },
    {
      label: "Mistake Book",
      href: "/dashboard/mistake-book",
      icon: (
        <NotepadText  className="h-5 w-5 flex-shrink-0"/>
      ),
    },
    {
      label: "Textbook Guidance",
      href: "/dashboard/textbook",
      icon: (
        <BookmarkMinus className=" h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Vocabulary",
      href: "/dashboard/vocabulary",
      icon: (
        <MessageSquare className=" h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Smart Chat",
      href: "/dashboard/smart-chat",
      icon: (
        <MessageCircleMore className=" h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Setting",
      href: "/dashboard/setting",
      icon: (
        <Settings className=" h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "w-full rounded-md flex flex-col md:flex-row bg-gray-100  dark:bg-neutral-800  flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}>
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-4">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
      <div className="flex flex-1 overflow-auto">
        <div className="overflow-auto flex flex-col  w-full h-full px-10 dark:border-neutral-700 bg-white dark:bg-neutral-900">
          {children}
        </div>
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black pl-8 py-1 relative z-20">
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <Image src="/sidebarLogo.png" alt="logo" width={20} height={20} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-[#5285F2] dark:text-white whitespace-pre">
        EduLog
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
