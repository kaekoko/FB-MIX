"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";

const AllReportTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: false,
    noEdit: false,
    optionHead: { title: "Action" },
    column: [
      { title: "Account Name", apiKey: "name", sortBy: "desc" },
      {
        title: "Contact",
        apiKey: "contact",
        sortBy: "desc",
      },
      { title: "All Bet Amount", apiKey: "allbetamount", sortBy: "desc" },
      { title: "Bet Amount", apiKey: "betamount", sortBy: "desc", type: "url" },
      {
        title: "Cancel Bet Amount",
        apiKey: "cancelbetamount",
        sortBy: "desc",
      },
      {
        title: "Bet Count",
        apiKey: "betcount",
        sortBy: "desc",
      },
      {
        title: "Member W/L",
        apiKey: "memberwl",
        sortBy: "desc",
      },
      {
        title: "Agent Com",
        apiKey: "agentcom",
        sortBy: "desc",
      },
      {
        title: "W/L",
        apiKey: "wl",
        sortBy: "desc",
      },
      {
        title: "Com",
        apiKey: "com",
        sortBy: "desc",
      },
      {
        title: "Net W/L",
        apiKey: "netwl",
        sortBy: "desc",
      },
    ],

    data: data || [],
  };

  //   if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AllReportTable);
