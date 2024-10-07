"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
// import BalanceModal from "../../allBetSlips/components/agent-balance-modal";
// import { userBalanceAPI } from "@/Utils/AxiosUtils/API";

const StaffTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: false,
    noEdit: true,
    optionHead: {
      title: "Detail",
      type: "View",
      modalTitle: "Action",
    },
    column: [
      { title: "Username", apiKey: "user_name", sortBy: "desc", type: "copy" },
      { title: "Date", apiKey: "created_at", sortBy: "desc", type: "date" },
      {
        title: "Edit",
        apiKey: "action",
        sortBy: "desc",
        type: "staff_edit",
      },
      {
        title: "Delete",
        apiKey: "action",
        sortBy: "desc",
        type: "staff_delete",
      },
    ],
    data: data || [],
  };

  if (!data) return null;
  return (
    <>
      {/* <BalanceModal {...props} url={userBalanceAPI} /> */}
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(StaffTable);
