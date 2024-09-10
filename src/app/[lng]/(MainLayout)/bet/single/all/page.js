import { Col } from "reactstrap";

import { singleBetAllAPI } from "@/Utils/AxiosUtils/API";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";
import SlipModal from "../../../allBetSlips/components/slip-modal";

const SingleBetAll = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        dateRange
        moduleName="All Bet"
        url={singleBetAllAPI}
        filterHeader={{ noPageDrop: false, noSearch: true, isDetail: true }}
      />
    </Col>
  );
};

export default SingleBetAll;
