import { Col } from "reactstrap";

import { singleBetPendingAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const SingleBetPending = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Pending Bet"
        url={singleBetPendingAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default SingleBetPending;
