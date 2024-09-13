"use client";
import RuleModalDialog from "@/Components/Modal/rule-modal";
import dynamic from "next/dynamic";
const MainDashboard = dynamic(
  () => import("../../../../Components/Dashboard"),
  { ssr: false }
);

const Dashboard = () => {
  return (
    <>
      <RuleModalDialog />
      <MainDashboard />
    </>
  );
};

export default Dashboard;
