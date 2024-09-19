"use client";

import { agentReportUsernameApi } from "@/Utils/AxiosUtils/API";
import AgentReportUserNameTable from "./AgentReportUserNameTable";
import { useState } from "react";

const AgentReportWithUsername = ({ params: { username } }) => {
  const [url, setUrl] = useState(agentReportUsernameApi + "/" + username);

  return (
    <>
      <AgentReportUserNameTable
        url={url}
        dateRange
        moduleName="Agent Report"
        filterHeader={{
          noSearch: true,
          onlyNoPageDrop: true,
          notPaginate: true,
          isReportDetail: true,
        }}
      />
      <AgentReportUserNameTable
        url={url}
        type="user"
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
