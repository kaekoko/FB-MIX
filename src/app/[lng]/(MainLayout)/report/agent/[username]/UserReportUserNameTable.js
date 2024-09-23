"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const UserReportUsernameTable = ({ type, data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: true,
    noEdit: false,
    isSerialNo: false,
    optionHead: {
      title: "Action",
      type: "View",
      redirectUrl: "/report/agent/user/",
    },
    column: [
      {
        title: "User Name",
        apiKey: "username",
        sortBy: "desc",
      },
      {
        title: "Bet Amount",
        apiKey: "stake_total",
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
    return headerObj?.data?.userReports?.filter((element) => {
      element.win_lose_total = element.win_lose_total
        ? Math.round(element.win_lose_total * 100) / 100
        : element.win_lose_total;

      return element;
    });
  }, [headerObj?.data]);
  headerObj.data = headerObj ? orders : [];

  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(UserReportUsernameTable);
