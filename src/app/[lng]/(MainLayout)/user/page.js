"use client";
import { useRouter } from "next/navigation";
import { Col } from "reactstrap";
import UserTable from "./detail/userTable";
import { userListAPI } from "@/Utils/AxiosUtils/API";

const UserPage = () => {
  return (
    <Col sm="12">
      <UserTable
        url={userListAPI}
        moduleName="User"
        filterHeader={{ isCreate: true }}
      />
    </Col>
  );
};

export default UserPage;
