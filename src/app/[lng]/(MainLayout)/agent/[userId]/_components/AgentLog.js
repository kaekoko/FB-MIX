import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import TabTitle from "@/Components/Coupon/TabTitle";
import { RiAdminLine, RiPercentLine, RiUserLine } from "react-icons/ri";
import AgentByAgentLog from "./Logs/AgentByAgent";
import AgentByUserLog from "./Logs/AgentByUser";
import AgentByCompanyLog from "./Logs/AgentByCompany";

const AgentLog = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [secondaryActiveTab, setSecondaryActiveTab] = useState("1");

  const filterValue = () => [
    {
      title: "Agent By Agent Transaction Log",
      icon: <RiAdminLine />,
    },
    {
      title: "Agent By User Transaction Log",
      icon: <RiUserLine />,
    },
    {
      title: "Agent By Company Transaction Log",
      icon: <RiPercentLine />,
    },
  ];

  return (
    <>
      <TabTitle
        activeTab={secondaryActiveTab}
        setActiveTab={setSecondaryActiveTab}
        titleList={filterValue() || []}
      />
      <TabContent activeTab={secondaryActiveTab}>
        <TabPane tabId="1">
          {secondaryActiveTab === "1" && (
            <AgentByAgentLog {...{ params, secondaryActiveTab }} />
          )}
        </TabPane>
        <TabPane tabId="2">
          {secondaryActiveTab === "2" && (
            <AgentByUserLog {...{ params, secondaryActiveTab }} />
          )}
        </TabPane>
        <TabPane tabId="3">
          {secondaryActiveTab === "3" && (
            <AgentByCompanyLog {...{ params, secondaryActiveTab }} />
          )}
        </TabPane>
      </TabContent>
    </>
  );
};

export default AgentLog;
