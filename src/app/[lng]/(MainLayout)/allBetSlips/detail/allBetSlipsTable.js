"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";

const AllBetSlipsTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: false,
    noEdit: false,
    optionHead: { title: "Action" },
    column: [
      { title: "Member ID", apiKey: "name", sortBy: "desc" },
      {
        title: "Date and Slips ID",
        apiKey: "created_at",
        sortBy: "desc",
      },
      { title: "Event", apiKey: "slug", sortBy: "desc" },
      { title: "Detail", apiKey: "style", sortBy: "desc", type: "url" },
      {
        title: "Bet Amount",
        apiKey: "id",
        sortBy: "desc",
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

export default TableWarper(AllBetSlipsTable);
