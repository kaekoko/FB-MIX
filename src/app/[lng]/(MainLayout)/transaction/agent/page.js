"use client";
import { agentMainTransaction } from "@/Utils/AxiosUtils/API";
import AgentTransactionTable from "../../agent/[userId]/_components/table/agent-transaction-table";
import { Form, Formik } from "formik";

const AgentTransactionHistory = () => {
  return (
    <>
      <Formik>
        {() => (
          <Form>
            <AgentTransactionTable
              moduleName="Agent Transaction"
              dateRange
              url={agentMainTransaction}
              filterHeader={{
                onlyNoPageDrop: true,
                filterSelect: true,
                isTransactionDetail: true,
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AgentTransactionHistory;
