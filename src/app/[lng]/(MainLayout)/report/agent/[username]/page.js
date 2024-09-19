"use client";

import { agentReportUsernameApi } from "@/Utils/AxiosUtils/API";
import AgentReportUserNameTable from "../AgentReportUserNameTable";
import { useState } from "react";

const AgentReportWithUsername = ({ params: { username } }) => {
  const [url, setUrl] = useState(agentReportUsernameApi + "/" + username);

  return (
    <AgentReportUserNameTable
      url={url}
      dateRange
      filterHeader={{ noSearch: true, isReportDetail: true }}
    />
  );
};

export default AgentReportWithUsername;
