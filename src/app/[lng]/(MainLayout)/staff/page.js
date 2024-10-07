import { staffListAPI } from "@/Utils/AxiosUtils/API";
import StaffTable from "./StaffTable";

const StaffPage = () => {
  return (
    <StaffTable
      moduleName="Staff"
      url={staffListAPI}
      filterHeader={{ isCreate: true }}
    />
  );
};

export default StaffPage;
