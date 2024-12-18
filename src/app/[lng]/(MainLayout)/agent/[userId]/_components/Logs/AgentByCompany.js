import { Col } from "reactstrap";
import { useEffect, useState } from "react";
import Loader from "@/Components/CommonComponent/Loader";
import { agentByCompanyTransactionLog } from "@/Utils/AxiosUtils/API";
import AgentByAgentLogTable from "../table/agent-by-agent-log-table";
import AgentByCompanyLogTable from "../table/agent-by-company-log-table";

const AgentByCompanyLog = ({ params: { userId }, secondaryActiveTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(`${agentByCompanyTransactionLog}/${userId}`);
    }, 1000);
    return () => clearTimeout(reload);
  }, [secondaryActiveTab]);

  if (loading) return <Loader />;

  return (
    <Col sm="12">
      <AgentByCompanyLogTable
        url={url}
        dateRange
        moduleName="Agent By Company Transaction Log"
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default AgentByCompanyLog;
