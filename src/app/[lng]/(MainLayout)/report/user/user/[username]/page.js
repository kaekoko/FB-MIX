"use client";
import { useState } from "react";
import { Form, Formik } from "formik";
import { agentUserByOneSlips } from "@/Utils/AxiosUtils/API";
import AgentBetslipTable from "@/app/[lng]/(MainLayout)/agent/[userId]/_components/table/agent-betslip-table";

const AgentUserReportBetslip = ({ params: { username } }) => {
  const [url, setUrl] = useState(agentUserByOneSlips + "/" + username);
  return (
    <Formik initialValues={{ category_ids: "" }}>
      {({ values, setFieldValue }) => (
        <Form>
          <AgentBetslipTable
            moduleName="Betslip"
            url={url}
            dateRange
            paramsProps={{
              category_ids: username,
            }}
            filterHeader={{
              noSearch: true,
              onlyNoPageDrop: true,
              filterSelect: true,
              isDetail: true,
              isBetSlip: true,
              betType: true,
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AgentUserReportBetslip;
