import { Col } from "reactstrap";

import { singleBetLostAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const SingleBetLost = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Lost Bet"
        url={singleBetLostAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default SingleBetLost;
