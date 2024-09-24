"use client";

import { useMemo } from "react";
import TableWarper from "@/Utils/HOC/TableWarper";
import ShowTable from "@/Components/Table/ShowTable";

const AgentTransactionTable = ({ data, ...props }) => {
  const headerObj = {
    noEdit: true,
    optionHead: {
      title: "Action",
    },
    column: [
      {
        title: "Username",
        apiKey: "user_name",
        sortBy: "desc",
      },
      {
        title: "Before Balance",
        apiKey: "before_balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Balance",
        apiKey: "balance",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "After Balance",
        apiKey: "after_balance",
        sortBy: "desc",
        type: "price",
      },

      {
        title: "Type",
        apiKey: "type",
        sortBy: "desc",
        type: "status",
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
      element.type = element.type ? (
        <div
          className={`badge py-1 px-3 ${
            element.type === "in" ? "badge-primary" : "badge-info"
          }`}
        >
          <span>{element?.type === "in" ? "Deposit" : "Withdraw"}</span>
        </div>
      ) : (
        "-"
      );
      element.user_name = element.agent ? (
        <div className="payment-mode">
          <span>{element?.agent?.user_name}</span>
        </div>
      ) : (
        <div className="payment-mode">
          <span>{element?.user?.user_name}</span>
        </div>
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

export default TableWarper(AgentTransactionTable);
