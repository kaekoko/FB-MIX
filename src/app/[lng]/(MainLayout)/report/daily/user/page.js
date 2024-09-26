"use client";
import { userDailyReport } from "@/Utils/AxiosUtils/API";
import UserDailyReportTable from "./DailyReportTable";

const UserReportDaily = () => {
  return (
    <UserDailyReportTable
      dateRange
      url={userDailyReport}
      moduleName="User Daily Report"
      filterHeader={{ isReportDetail: true, noSearch: true }}
    />
  );
};

export default UserReportDaily;
