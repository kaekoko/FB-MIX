import { Col } from "reactstrap";

import { singleBetWonAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const SingleBetWon = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Won Bet"
        url={singleBetWonAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default SingleBetWon;
