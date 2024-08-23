import { Col } from "reactstrap";
import { ReportAPI } from "@/Utils/AxiosUtils/API";
import AllReportTable from "./detail/allReportTable";

const ReportPage = () => {
  return (
    <Col sm="12">
      <AllReportTable
        url={ReportAPI}
        dateRange
        moduleName="Report W/L Detail"
      />
      {/* <SlipModal /> */}
    </Col>
  );
};

export default ReportPage;
