"use client";
import { Form, Formik } from "formik";
import { userMainTransaction } from "@/Utils/AxiosUtils/API";
import AgentTransactionTable from "../../agent/[userId]/_components/table/agent-transaction-table";

const UserTransactionHistory = () => {
  return (
    <>
      <Formik>
        {() => (
          <Form>
            <AgentTransactionTable
              moduleName="User Transaction"
              dateRange
              url={userMainTransaction}
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

export default UserTransactionHistory;
