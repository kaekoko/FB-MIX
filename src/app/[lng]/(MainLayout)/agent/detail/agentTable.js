"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import BalanceModal from "../../allBetSlips/components/agent-balance-modal";
import {
  AgentBalanceAPI,
  AgentBlockAPI,
  AgentSuspendAPI,
} from "@/Utils/AxiosUtils/API";

const AgentTable = ({ data, ...props }) => {
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
      {
        title: "Username",
        apiKey: "user_name",
        sortBy: "desc",
        type: "copy",
      },
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
        url: AgentBlockAPI,
      },
      {
        title: "Suspend",
        apiKey: "suspend",
        sortBy: "desc",
        type: "switch",
        url: AgentSuspendAPI,
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
      <BalanceModal {...props} url={AgentBalanceAPI} isAgent />
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AgentTable);
