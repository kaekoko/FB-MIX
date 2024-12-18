import { Col } from "reactstrap";
import { useEffect, useState } from "react";
import Loader from "@/Components/CommonComponent/Loader";
import { agentByUserTransactionLog } from "@/Utils/AxiosUtils/API";
import AgentByUserLogTable from "../table/agent-by-user-log-table";

const AgentByUserLog = ({ params: { userId }, secondaryActiveTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(`${agentByUserTransactionLog}/${userId}`);
    }, 1000);
    return () => clearTimeout(reload);
  }, [secondaryActiveTab]);

  if (loading) return <Loader />;

  return (
    <Col sm="12">
      <AgentByUserLogTable
        url={url}
        dateRange
        moduleName="Agent By User Transaction Log"
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default AgentByUserLog;
