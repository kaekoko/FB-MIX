import { useState } from "react";
import { userEachBetSlipAPI } from "@/Utils/AxiosUtils/API";
import { Form, Formik } from "formik";
import AgentBetslipTable from "../../../agent/[userId]/_components/table/agent-betslip-table";

const UserBetslip = ({ params, activeTab }) => {
  const [url, setUrl] = useState(userEachBetSlipAPI + "/" + params?.userId);

  return (
    <>
      <Formik initialValues={{ category_ids: "" }}>
        {({ values, setFieldValue }) => (
          <Form>
            <AgentBetslipTable
              moduleName="User Betslip"
              url={url}
              dateRange
              paramsProps={{
                category_ids: params.userId,
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
    </>
  );
};

export default UserBetslip;
