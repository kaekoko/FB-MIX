"use client";
import { Col } from "reactstrap";
import AgentTable from "./detail/agentTable";
import { AgentListAPI } from "@/Utils/AxiosUtils/API";
import { useRouter } from "next/navigation";

const AgentPage = () => {
  return (
    <Col sm="12">
      <AgentTable
        url={AgentListAPI}
        moduleName="Agent"
        filterHeader={{ isCreate: true }}
      />
    </Col>
  );
};

export default AgentPage;
