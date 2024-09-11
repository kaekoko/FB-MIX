"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useEffect, useMemo } from "react";

const AgentCommissionTable = ({ data, ...props }) => {
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
        title: "Stake",
        apiKey: "stake",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Commission",
        apiKey: "commission",
        sortBy: "desc",
        type: "price",
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
      element.user_name = element.agent ? (
        <div className="payment-mode">
          <span>{element?.agent.user_name}</span>
        </div>
      ) : (
        <div className="payment-mode">
          <span>{element?.user.user_name}</span>
        </div>
      );
      return element;
    });
  }, [headerObj?.data]);
  headerObj.data = headerObj ? orders : [];

  console.log(data);

  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(AgentCommissionTable);
