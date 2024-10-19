'use client'
import { MySidebar } from "@/components/dashboard/mySideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MySidebar>{children}</MySidebar>
    </>
  );
}
