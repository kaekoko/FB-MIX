import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import AgentEachListTable from "../_components/table/agent-list-table";
import { agentEachAgentList } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";

const AgentEachAgentList = ({ params, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(agentEachAgentList + "/" + params?.userId);
    }, 1000);
    return () => clearTimeout(reload);
  }, [activeTab]);

  if (loading) return <Loader />;
  return (
    <>
      <Formik initialValues={{ category_ids: "" }}>
        {({ values, setFieldValue }) => (
          <Form>
            <AgentEachListTable
              moduleName="Agent List"
              url={url}
              dateRange
              paramsProps={{
                category_ids: params.userId,
              }}
              filterHeader={{
                noSearch: true,
                onlyNoPageDrop: true,
                filterSelect: false,
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AgentEachAgentList;
