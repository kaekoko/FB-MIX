import { useEffect, useState } from "react";
import { userTransactionHistoryAPI } from "@/Utils/AxiosUtils/API";
import { Form, Formik } from "formik";
import AgentTransactionTable from "../../../agent/[userId]/_components/table/agent-transaction-table";
import Loader from "@/Components/CommonComponent/Loader";

const UserTransaction = ({ params, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(userTransactionHistoryAPI + "/" + params?.userId);
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
              moduleName="User Transaction"
              url={url}
              dateRange
              paramsProps={{
                category_ids: params.userId,
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

export default UserTransaction;
