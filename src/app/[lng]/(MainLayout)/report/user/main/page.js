"use client";

import { userReportMain } from "@/Utils/AxiosUtils/API";
import UserReportUserNameTable from "./UserReportUserNameTable";

const AgentReportWithUsername = () => {
  return (
    <UserReportUserNameTable
      dateRange
      url={userReportMain}
      moduleName="User Report"
      filterHeader={{
        noSearch: true,
        onlyNoPageDrop: true,
        notPaginate: true,
        isReportDetail: true,
      }}
    />
  );
};

export default AgentReportWithUsername;
