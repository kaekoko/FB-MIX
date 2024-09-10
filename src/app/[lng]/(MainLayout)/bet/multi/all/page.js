import { Col } from "reactstrap";

import { multipleBetAllAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const MultipleBetAll = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="All Bet"
        url={multipleBetAllAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default MultipleBetAll;
