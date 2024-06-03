"use client";
import DashboardHeader from "@/collections/Headers/DashboardHeader";
import { useUser } from "@clerk/nextjs";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user } = useUser();

  if (!user) return <>Loading...</>;

  return (
    <>
      <DashboardHeader />

      <main>{children}</main>

      <footer>Footer here</footer>
    </>
  );
};

export default DashboardLayout;
