import { Col } from "reactstrap";

import { multipleBetLostAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const MultipleBetLost = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Lost Bet"
        url={multipleBetLostAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default MultipleBetLost;
