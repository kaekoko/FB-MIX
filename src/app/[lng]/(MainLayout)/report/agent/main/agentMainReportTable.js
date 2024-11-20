"use client";

import ShowTable from "@/Components/Table/ShowTable";
import TableWarper from "@/Utils/HOC/TableWarper";
import { useMemo } from "react";

const AgentMainReportTable = ({ data, ...props }) => {
  const headerObj = {
    checkBox: false,
    isOption: true,
    noEdit: false,
    optionHead: {
      title: "Action",
      type: "View",
      redirectUrl: "/report/agent/",
    },
    column: [
      {
        title: "Agent User Name",
        apiKey: "username",
        sortBy: "desc",
      },
      {
        title: "Bet Amount",
        apiKey: "stake_total",
        type: "price",
        sortBy: "desc",
      },

      {
        title: "Downline Commission",
        apiKey: "commission_total",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Self Commission",
        apiKey: "self_commission",
        sortBy: "desc",
        type: "price",
      },

      {
        title: "Win",
        apiKey: "win_total",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Player W/L",
        apiKey: "player_win_lose",
        sortBy: "desc",
        type: "price",
      },
      {
        title: "Agent W/L",
        apiKey: "agent_win_lose",
        sortBy: "desc",
        type: "price",
      },
    ],
    data: data || [],
  };

  let orders = useMemo(() => {
    return headerObj?.data?.filter((element) => {
      element.player_win_lose = element.player_win_lose
        ? Math.round(element.player_win_lose * 100) / 100
        : element.player_win_lose;
      element.agent_win_lose = element.agent_win_lose
        ? Math.round(element.agent_win_lose * 100) / 100
        : element.agent_win_lose;
      element.commission_total = element.commission_total
        ? Math.round(element.commission_total * 100) / 100
        : element.commission_total;
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

export default TableWarper(AgentMainReportTable);
