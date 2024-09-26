"use client";

import FormWrapper from "@/Utils/HOC/FormWrapper";
import { Card, CardBody, Col, Row } from "reactstrap";
import ProfileInformation from "./components/profile-information";
import ProfileMessage from "./components/profile-message";

const Profile = () => {
  return (
    <Card className="bg-transparent">
      <CardBody>
        <div className="title-header option-title">
          <h5>Account Profile</h5>
        </div>

        <Row className="d-flex justify-content-between">
          <Col sm={12}>
            <ProfileInformation />
          </Col>
          {/* <Col sm={12} md={7} className="">
            <ProfileMessage />
          </Col> */}
        </Row>
      </CardBody>
    </Card>
  );
};

export default Profile;
