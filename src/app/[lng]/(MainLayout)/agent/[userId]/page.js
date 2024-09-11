"use client";

import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import TabTitle from "@/Components/Coupon/TabTitle";
import { AccountTab } from "@/Data/TabTitleListData";
import AgentGeneral from "./_components/General";
import AgentTransaction from "./_components/Transaction";
import { RiPercentLine } from "react-icons/ri";
import AgentBetSlip from "./_components/Betslip";
import AgentReport from "./_components/Report";
import AgentCommission from "./_components/Comission";

const AgentDetail = ({ params }) => {
  const [activeTab, setActiveTab] = useState("1");
  const filterValue = () => [
    ...AccountTab,
    {
      title: "Commission",
      icon: <RiPercentLine />,
      for: "agent",
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
        <TabPane tabId="1">
          <AgentGeneral {...{ params, activeTab }} />
        </TabPane>
        <TabPane tabId="2">
          <AgentTransaction {...{ params, activeTab }} />
        </TabPane>
        <TabPane tabId="3">
          <AgentBetSlip {...{ params, activeTab }} />
        </TabPane>
        <TabPane tabId="4">
          <AgentReport {...{ params, activeTab }} />
        </TabPane>
        <TabPane tabId="5">
          <AgentCommission {...{ params, activeTab }} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AgentDetail;
