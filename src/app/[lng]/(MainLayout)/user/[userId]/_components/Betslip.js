import { useEffect, useState } from "react";
import { userEachBetSlipAPI } from "@/Utils/AxiosUtils/API";
import { Form, Formik } from "formik";
import AgentBetslipTable from "../../../agent/[userId]/_components/table/agent-betslip-table";
import Loader from "@/Components/CommonComponent/Loader";

const UserBetslip = ({ params, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(userEachBetSlipAPI + "/" + params?.userId);
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
              url={url}
              dateRange
              moduleName="User Betslip"
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
