import { useEffect, useState } from "react";
import { AgentTransactionHistoryAPI } from "@/Utils/AxiosUtils/API";
import AgentTransactionTable from "./table/agent-transaction-table";
import { Form, Formik } from "formik";
import Loader from "@/Components/CommonComponent/Loader";

const AgentTransaction = ({ params, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(AgentTransactionHistoryAPI + "/" + params?.userId);
    }, 1000);
    return () => clearTimeout(reload);
  }, [activeTab]);

  if (loading) return <Loader />;

  return (
    <>
      <Formik initialValues={{ category_ids: "" }}>
        {({ values, setFieldValue }) => (
          <Form>
            <AgentTransactionTable
              moduleName="Transaction"
              url={url}
              dateRange
              paramsProps={{
                category_ids: params?.userId,
              }}
              filterHeader={{
                noSearch: true,
                onlyNoPageDrop: true,
                filterSelect: true,
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AgentTransaction;
