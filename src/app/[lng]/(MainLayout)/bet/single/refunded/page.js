import { Col } from "reactstrap";

import { singleBetRefundedAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const SingleBetRefunded = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Refunded Bet"
        url={singleBetRefundedAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default SingleBetRefunded;
