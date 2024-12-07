"use client";

import { agentCurrentReportByUserName } from "@/Utils/AxiosUtils/API";
import { useState } from "react";
import AgentCurrentReportUsernameTable from "./agentCurrentReportUsernameTable";
import UserCurrentReportUsernameTable from "./userCurrentReportUsernameTable";

const AgentCurrentReportWithUsername = ({ params: { username } }) => {
  const [url, setUrl] = useState(agentCurrentReportByUserName + "/" + username);

  return (
    <>
      <AgentCurrentReportUsernameTable
        url={url}
        moduleName="Today Agent Report"
        filterHeader={{
          noSearch: true,
          onlyNoPageDrop: true,
          notPaginate: true,
          isReportDetail: true,
        }}
      />
      <UserCurrentReportUsernameTable
        url={url}
        moduleName="Today User Report"
        filterHeader={{
          noSearch: true,
          noPageDrop: true,
          notPaginate: true,
        }}
      />
    </>
  );
};

export default AgentCurrentReportWithUsername;
