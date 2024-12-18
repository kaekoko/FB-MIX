"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const AgentByUserLogTable = ({ data, ...props }) => {
  const headerObj = {
    noEdit: true,
    optionHead: {
      title: "Action",
    },
    column: [
      {
        title: "Agent Name",
        apiKey: "agent_name",
        sortBy: "desc",
      },
      {
        title: "User Name",
        apiKey: "user_name",
        sortBy: "desc",
      },
      {
        title: "Agent Before Balance",
        apiKey: "agent_before_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "User Before Balance",
        apiKey: "user_before_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Cash Balance",
        apiKey: "cash_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Agent After Balance",
        apiKey: "agent_after_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "User After Balance",
        apiKey: "user_after_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Agent Status",
        apiKey: "agent_type",
        sortBy: "desc",
      },
      {
        title: "User Status",
        apiKey: "user_type",
        sortBy: "desc",
      },
      {
        title: "Date Time",
        apiKey: "created_at",
        sortBy: "desc",
        type: "date",
      },
    ],
    data: data || [],
  };

  let orders = useMemo(() => {
    return headerObj?.data?.filter((element) => {
      element.agent_type = element.agent_type ? (
        <div
          className={`badge py-1 px-3 ${
            element.agent_type === "in" ? "badge-primary" : "badge-info"
          }`}
        >
          <span>{element?.agent_type === "in" ? "IN" : "OUT"}</span>
        </div>
      ) : (
        "-"
      );

      element.user_type = element.user_type ? (
        <div
          className={`badge py-1 px-3 ${
            element.user_type === "in" ? "badge-primary" : "badge-info"
          }`}
        >
          <span>{element?.user_type === "in" ? "IN" : "OUT"}</span>
        </div>
      ) : (
        "-"
      );
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

export default TableWarper(AgentByUserLogTable);
