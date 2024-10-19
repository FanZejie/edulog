'use client'
import AvatarWithLabel from "@/components/dashboard/avatarWithLabel";

export default function VocabularyLayout({
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
        {children}
      </div>
    </>
  );
}
