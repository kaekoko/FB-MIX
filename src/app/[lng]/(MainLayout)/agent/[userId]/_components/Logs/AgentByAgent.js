import { Col } from "reactstrap";
import { useEffect, useState } from "react";
import Loader from "@/Components/CommonComponent/Loader";
import { agentByAgentTransactionLog } from "@/Utils/AxiosUtils/API";
import AgentByAgentLogTable from "../table/agent-by-agent-log-table";

const AgentByAgentLog = ({ params: { userId }, secondaryActiveTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(`${agentByAgentTransactionLog}/${userId}`);
    }, 1000);
    return () => clearTimeout(reload);
  }, [secondaryActiveTab]);

  if (loading) return <Loader />;

  return (
    <Col sm="12">
      <AgentByAgentLogTable
        url={url}
        dateRange
        moduleName="Agent By Agent Transaction Log"
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default AgentByAgentLog;
