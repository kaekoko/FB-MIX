import { Col } from "reactstrap";
import BetSlipTable from "@/app/[lng]/(MainLayout)/bet/components/bet-table";
import { trackBetslipAPI } from "@/Utils/AxiosUtils/API";

const BetslipTracker = () => {
  return (
    <Col sm="12">
      <BetSlipTable
        moduleName="Betslip Tracker"
        url={trackBetslipAPI}
        isSerialNo={false}
      />
    </Col>
  );
};

export default BetslipTracker;
