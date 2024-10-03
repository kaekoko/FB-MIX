"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const SelfTransactionTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: false,
    noEdit: true,
    optionHead: {
      type: "View",
    },
    column: [
      { title: "User Name", apiKey: "user_name" },
      {
        title: "Bet Amount",
        apiKey: "stake",
        type: "price",
      },
      { title: "Commission", apiKey: "commission", type: "price" },
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

export default TableWarper(SelfTransactionTable);
