"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const SliderTable = ({ data, auth, authID, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: false,
    noEdit: true,
    optionHead: {
      type: "View",
      title: "Detail",
      modalTitle: "Action",
    },
    column: [
      { title: "Status", apiKey: "status" },
      { title: "Image", apiKey: "image", type: "image" },
      {
        title: "Edit",
        apiKey: "action",
        sortBy: "desc",
        type: "banner_edit",
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

  const orders = useMemo(() => {
    if (!headerObj?.data || !authID) return [];

    return headerObj.data
      .filter((element) => element.agent_id === authID)
      .map((element) => {
        element.statusValue = element.status == 1 ? 1 : 0;

        element.status =
          element.status != null ? (
            <div
              className={`badge py-1 px-3 ${
                element.status == 1 ? "text-bg-success" : "text-bg-danger"
              }`}
            >
              <span>{element.status == 1 ? "Active" : "Inactive"}</span>
            </div>
          ) : (
            "-"
          );

        return element;
      });
  }, [headerObj?.data, auth?.id]);

  headerObj.data = orders;

  if (!data) return null;

  return (
    <>
      {/* <BalanceModal {...props} url={userBalanceAPI} /> */}
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWarper(SliderTable);
