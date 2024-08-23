"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import BalanceModal from "../../allBetSlips/components/agent-balance-modal";
import { userBalanceAPI, userBlockAPI } from "@/Utils/AxiosUtils/API";

const UserTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: true,
    noEdit: true,
    optionHead: {
      title: "Detail",
      type: "View",
      redirectUrl: "/user/",
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
      {
        title: "Block",
        apiKey: "block",
        sortBy: "desc",
        type: "switch",
        url: userBlockAPI,
      },
      {
        title: "Action",
        apiKey: "action",
        sortBy: "desc",
        type: "button",
        btnText: "Manage Balance",
      },
    ],
    data: data || [],
  };

  if (!data) return null;
  return (
    <>
      <BalanceModal {...props} url={userBalanceAPI} />
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(UserTable);
