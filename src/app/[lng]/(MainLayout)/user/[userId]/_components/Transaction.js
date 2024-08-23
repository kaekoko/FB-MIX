import { useState } from "react";
import { userTransactionHistoryAPI } from "@/Utils/AxiosUtils/API";
import { Form, Formik } from "formik";
import AgentTransactionTable from "../../../agent/[userId]/_components/table/agent-transaction-table";

const UserTransaction = ({ params, activeTab }) => {
  const [url, setUrl] = useState(
    userTransactionHistoryAPI + "/" + params?.userId
  );

  return (
    <>
      <Formik initialValues={{ category_ids: "" }}>
        {({ values, setFieldValue }) => (
          <Form>
            <AgentTransactionTable
              moduleName="Agent Transaction"
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
