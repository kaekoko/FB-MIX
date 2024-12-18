"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const AgentByCompanyLogTable = ({ data, ...props }) => {
  const headerObj = {
    noEdit: true,
    optionHead: {
      title: "Action",
    },
    column: [
      {
        title: "Main Agent Name",
        apiKey: "main_agent_name",
        sortBy: "desc",
      },
      {
        title: "Self Agent Name",
        apiKey: "self_agent_name",
        sortBy: "desc",
      },
      {
        title: "Main Agent Before Balance",
        apiKey: "main_agent_before_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Self Agent Before Balance",
        apiKey: "self_agent_before_balance",
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
        title: "Main Agent After Balance",
        apiKey: "main_agent_after_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Self Agent After Balance",
        apiKey: "self_agent_after_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Main Agent Status",
        apiKey: "status",
        sortBy: "desc",
        type: "status",
      },
      {
        title: "Self Agent Status",
        apiKey: "main_agent_type",
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
      element.main_agent_type = element.main_agent_type ? (
        <div
          className={`badge py-1 px-3 ${
            element.main_agent_type === "in" ? "badge-primary" : "badge-info"
          }`}
        >
          <span>{element?.main_agent_type === "in" ? "IN" : "OUT"}</span>
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

export default TableWarper(AgentByCompanyLogTable);
