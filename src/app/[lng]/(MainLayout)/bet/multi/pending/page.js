import { Col } from "reactstrap";

import { multipleBetPendingAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";

const MultipleBetPending = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="Pending Bet"
        url={multipleBetPendingAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default MultipleBetPending;
