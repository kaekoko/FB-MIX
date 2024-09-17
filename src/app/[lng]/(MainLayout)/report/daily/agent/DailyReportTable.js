"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";

const AgentDailyReportTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: false,
    noEdit: false,
    optionHead: {
      title: "Detail",
    },
    column: [
      { title: "Date", apiKey: "date", sortBy: "desc", type: "date" },
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

  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AgentDailyReportTable);
