"use client";

import { useState } from "react";
import { RiPercentLine } from "react-icons/ri";
import { TabContent, TabPane } from "reactstrap";
import CreateTicket from "./_ticket/CreateTicket";
import TabTitle from "@/Components/Coupon/TabTitle";
import GetTicket from "./_ticket/GetTicket";

const CustomerSupport = () => {
  const [activeTab, setActiveTab] = useState("1");
  const filterValue = () => [
    {
      title: "Create",
      icon: <RiPercentLine />,
    },
    {
      title: "List",
      icon: <RiPercentLine />,
    },
  ];
  return (
    <div className="inside-horizontal-tabs mt-0">
      <TabTitle
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titleList={filterValue() || []}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">{activeTab === "1" && <CreateTicket />}</TabPane>
        <TabPane tabId="2">{activeTab === "2" && <GetTicket />}</TabPane>
      </TabContent>
    </div>
  );
};

export default CustomerSupport;
