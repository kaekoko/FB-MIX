import { Col } from "reactstrap";

import { multipleBetBonusAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const MultipleBetWon = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Bonus Bet"
        url={multipleBetBonusAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default MultipleBetWon;
