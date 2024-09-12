import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import UserEachListTable from "../_components/table/user-list-table";
import { agentEachUserList } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";

const AgentEachUserList = ({ params, activeTab }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const reload = setTimeout(() => {
      setLoading(false);
      setUrl(agentEachUserList + "/" + params?.userId);
    }, 1000);
    return () => clearTimeout(reload);
  }, [activeTab]);

  if (loading) return <Loader />;
  return (
    <>
      <Formik initialValues={{ category_ids: "" }}>
        {({ values, setFieldValue }) => (
          <Form>
            <UserEachListTable
              moduleName="User List"
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

export default AgentEachUserList;
