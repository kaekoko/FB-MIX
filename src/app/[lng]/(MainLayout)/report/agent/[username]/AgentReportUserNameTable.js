"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const AgentReportUsernameTable = ({ type, data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: true,
    noEdit: false,
    isSerialNo: false,
    optionHead: {
      title: "Action",
      type: "View",
      redirectUrl: type === "user" ? "/report/agent/user/" : "/report/agent/",
    },
    column: [
      {
        title: type === "user" ? "User Name" : "Agent User Name",
        apiKey: "username",
        sortBy: "desc",
      },
      {
        title: "Stake",
        apiKey: "stake_total",
        type: "price",
        sortBy: "desc",
      },
      {
        title: "Tax",
        apiKey: "tax_total",
        type: "price",
        sortBy: "desc",
      },
      {
        title: "Commission",
        apiKey: "commission_total",
        sortBy: "desc",
        type: "price",
      },

      {
        title: "Reward",
        apiKey: "win_total",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Win / Lose",
        apiKey: "win_lose_total",
        sortBy: "desc",
        type: "price",
      },
    ],
    data: data || [],
  };

  let orders = useMemo(() => {
    if (type === "user") {
      return headerObj?.data?.userReports?.filter((element) => element);
    }
    return headerObj?.data?.agentReport?.filter((element) => element);
  }, [headerObj?.data]);
  headerObj.data = headerObj ? orders : [];

  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AgentReportUsernameTable);
