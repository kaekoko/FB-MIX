import { Col } from "reactstrap";

import { multipleBetWonAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const MultipleBetWon = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Won Bet"
        url={multipleBetWonAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default MultipleBetWon;
