"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const BetSlipTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: true,
    noEdit: true,
    optionHead: {
      type: "View",
      title: "Detail",
      modalTitle: "Action",
    },
    column: [
      { title: "Slip ID", apiKey: "id" },
      { title: "User Name", apiKey: "user_name" },
      {
        title: "Bet Amount",
        apiKey: "stake",
        type: "price",
      },
      { title: "Return Amount", apiKey: "return_amount", type: "price" },
      { title: "Status", apiKey: "status", type: "status" },
      {
        title: "Date Time",
        apiKey: "created_at",
        type: "date",
      },
    ],
    data: data || [],
  };

  let orders = useMemo(() => {
    return headerObj?.data?.filter((element) => {
      element.status = element.status ? (
        <div
          className={`badge py-1 px-3 ${
            element?.status === "pending"
              ? "text-bg-secondary"
              : element?.status === "win"
              ? "text-bg-success"
              : element.status === "loss"
              ? "text-bg-danger"
              : element.status === "bonus"
              ? "text-bg-info"
              : "badge-danger"
          }`}
        >
          <span>
            {element?.status === "pending"
              ? "Pending"
              : element?.status === "win"
              ? "Win"
              : element.status === "loss"
              ? "Loss"
              : element.status === "bonus"
              ? "Bonus"
              : "Refund"}
          </span>
        </div>
      ) : (
        "-"
      );
      element.user_name = element.user.user_name && (
        <div className="payment-mode">
          <span>{element?.user.user_name}</span>
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

export default TableWarper(BetSlipTable);
