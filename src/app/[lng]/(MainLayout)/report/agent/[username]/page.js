"use client";

import { useState } from "react";
import { agentReportUsernameApi } from "@/Utils/AxiosUtils/API";
import AgentReportUserNameTable from "./AgentReportUserNameTable";
import UserReportUserNameTable from "./UserReportUserNameTable";
import { useAgentReportDate } from "@/Utils/Zustand";

const AgentReportWithUsername = ({ params: { username } }) => {
  const [url, setUrl] = useState(agentReportUsernameApi + "/" + username);
  const { dateData } = useAgentReportDate();

  return (
    <>
      <AgentReportUserNameTable
        url={url}
        dateRange
        reportDate={dateData}
        moduleName="Agent Report"
        filterHeader={{
          noSearch: true,
          onlyNoPageDrop: true,
          notPaginate: true,
          isReportDetail: true,
        }}
      />
      <UserReportUserNameTable
        url={url}
        reportDate={dateData}
        moduleName="User Report"
        filterHeader={{
          noSearch: true,
          noPageDrop: true,
          notPaginate: true,
        }}
      />
    </>
  );
};

export default AgentReportWithUsername;
