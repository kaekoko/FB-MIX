"use client";
import { agentDailyReport } from "@/Utils/AxiosUtils/API";
import AgentDailyReportTable from "./DailyReportTable";

const AgentReportDaily = () => {
  return (
    <AgentDailyReportTable
      dateRange
      url={agentDailyReport}
      moduleName="Agent Daily Report"
      filterHeader={{ isReportDetail: true, noSearch: true }}
    />
  );
};

export default AgentReportDaily;
