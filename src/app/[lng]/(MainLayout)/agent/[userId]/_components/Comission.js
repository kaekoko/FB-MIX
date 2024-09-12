import { Col } from "reactstrap";

import { AgentCommissionHistoryAPI } from "@/Utils/AxiosUtils/API";
import { useEffect, useState } from "react";
import AgentCommissionTable from "./table/agent-commission-table";
import Loader from "@/Components/CommonComponent/Loader";

const AgentCommission = ({ params: { userId }, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(`${AgentCommissionHistoryAPI}/${userId}`);
    }, 1000);
    return () => clearTimeout(reload);
  }, [activeTab]);

  if (loading) return <Loader />;

  return (
    <Col sm="12">
      <AgentCommissionTable
        url={url}
        dateRange
        moduleName="Commission"
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default AgentCommission;
