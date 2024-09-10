"use client";
import { selfTransactionAPI } from "@/Utils/AxiosUtils/API";
import AgentTransactionTable from "../../agent/[userId]/_components/table/agent-transaction-table";
import { Form, Formik } from "formik";
import { useState } from "react";

const SelfTransactionPage = ({ params }) => {
  const [url, setUrl] = useState(selfTransactionAPI);

  return (
    <>
      <Formik>
        {({ values, setFieldValue }) => (
          <Form>
            <AgentTransactionTable
              moduleName="Agent Transaction"
              url={url}
              dateRange
              filterHeader={{
                noSearch: true,
                onlyNoPageDrop: true,
                filterSelect: true,
                isDetail: true,
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SelfTransactionPage;
