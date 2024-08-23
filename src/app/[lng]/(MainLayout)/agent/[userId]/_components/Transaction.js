import { useEffect, useState } from "react";
import { AgentTransactionHistoryAPI } from "@/Utils/AxiosUtils/API";
import AgentTransactionTable from "./table/agent-transaction-table";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import { Form, Formik } from "formik";

const AgentTransaction = ({ params, activeTab }) => {
  const [url, setUrl] = useState(
    AgentTransactionHistoryAPI + "/" + params?.userId
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

export default AgentTransaction;
