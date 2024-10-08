import { useEffect, useState } from "react";
import { AgentEachBetSlipAPI } from "@/Utils/AxiosUtils/API";
import { Form, Formik } from "formik";
import AgentBetslipTable from "../../../agent/[userId]/_components/table/agent-betslip-table";
import Loader from "@/Components/CommonComponent/Loader";

const AgentBetSlip = ({ params, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(AgentEachBetSlipAPI + "/" + params?.userId);

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(reload);
  }, [activeTab]);

  if (loading) return <Loader />;

  return (
    <>
      <Formik initialValues={{ category_ids: "" }}>
        {({ values, setFieldValue }) => (
          <Form>
            <AgentBetslipTable
              moduleName="Betslip"
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

export default AgentBetSlip;
