"use client";

import { agentCurrentReport } from "@/Utils/AxiosUtils/API";
import AgentCurrentReportTable from "./agentCurrentReportTable";

const AgentReportWithUsername = () => {
  return (
    <AgentCurrentReportTable
      url={agentCurrentReport}
      moduleName="Today Agent Report"
      filterHeader={{ noSearch: true, isReportDetail: true }}
    />
  );
};

export default AgentReportWithUsername;
