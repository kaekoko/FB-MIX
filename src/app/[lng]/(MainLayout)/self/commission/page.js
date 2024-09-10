import { Col } from "reactstrap";

import { selfCommissionAPI } from "@/Utils/AxiosUtils/API";
import SelfTransactionTable from "@/app/[lng]/(MainLayout)/self/commission/table";

const SelfCommissionPage = () => {
  return (
    <Col sm="12">
      <SelfTransactionTable
        dateRange
        moduleName="Self Commission"
        url={selfCommissionAPI}
        filterHeader={{ isDetail: true }}
      />
    </Col>
  );
};

export default SelfCommissionPage;
