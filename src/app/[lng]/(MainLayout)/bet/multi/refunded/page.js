import { Col } from "reactstrap";

import { multipleBetRefundedAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const MultipleBetRefunded = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Refunded Bet"
        url={multipleBetRefundedAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default MultipleBetRefunded;
