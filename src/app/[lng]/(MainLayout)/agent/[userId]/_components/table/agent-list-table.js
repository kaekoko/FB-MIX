"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";

const AgentEachListTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: true,
    noEdit: true,
    optionHead: {
      title: "Detail",
      type: "View",
      redirectUrl: "/agent/",
      modalTitle: "Action",
    },
    column: [
      { title: "Name", apiKey: "name", sortBy: "desc" },
      { title: "Username", apiKey: "user_name", sortBy: "desc" },
      {
        title: "Mobile",
        apiKey: "phone_number",
        sortBy: "desc",
      },
      {
        title: "Balance",
        apiKey: "balance",
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

export default TableWarper(AgentEachListTable);
