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
      redirectUrl: "/report/user/user/",
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
        title: "Win",
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

  console.log(data);

  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(UserReportUsernameTable);
