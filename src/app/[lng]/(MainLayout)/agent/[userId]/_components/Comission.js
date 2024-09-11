import { Col } from "reactstrap";

import { AgentCommissionHistoryAPI } from "@/Utils/AxiosUtils/API";
import { useState } from "react";
import AgentCommissionTable from "./table/agent-commission-table";

const AgentCommission = ({ params: { userId }, activeTab }) => {
  const [url, setUrl] = useState(`${AgentCommissionHistoryAPI}/${userId}`);

  return (
    <Col sm="12">
      <AgentCommissionTable
        url={url}
        dateRange
        moduleName="All Bet"
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default AgentCommission;
