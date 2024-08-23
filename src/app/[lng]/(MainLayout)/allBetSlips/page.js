import { Col } from "reactstrap";
import AllBetSlipsTable from "./detail/allBetSlipsTable";
import { AllBetSlipsAPI, attribute } from "@/Utils/AxiosUtils/API";
import SlipModal from "./components/slip-modal";

const AllBetSlips = () => {
  return (
    <Col sm="12">
      <AllBetSlipsTable url={attribute} moduleName="All Bet Slips" />
      <SlipModal />
    </Col>
  );
};

export default AllBetSlips;
