import AvatarWithLabel from "@/components/dashboard/avatarWithLabel";
import Image from "next/image";

export default function TextbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="pt-10">
          <AvatarWithLabel />
        </div>
        <div className="pt-4 flex flex-row items-center justify-start">
        <Image  src="/chat.png" alt="send" width={60} height={60} />
        <h1>Hello,Jane. You can ask me any questions.</h1>
        </div>
        <div className="w-full h-screen">
        {children}
        </div>
      
      </div>
    </>
  );
}
