import { staffDeleteAPI, staffListAPI } from "@/Utils/AxiosUtils/API";
import StaffTable from "./StaffTable";

const StaffPage = () => {
  return (
    <StaffTable
      moduleName="Staff"
      url={staffListAPI}
      deleteAPI={staffDeleteAPI}
      filterHeader={{ isCreate: true }}
    />
  );
};

export default StaffPage;
