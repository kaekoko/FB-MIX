"use client";

import { agentReportMain } from "@/Utils/AxiosUtils/API";
import AgentMainReportTable from "./agentMainReportTable";

const AgentReportWithUsername = () => {
  return (
    <AgentMainReportTable
      dateRange
      url={agentReportMain}
      filterHeader={{ noSearch: true, isReportDetail: true }}
    />
  );
};

export default AgentReportWithUsername;
