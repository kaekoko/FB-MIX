import Loader from "@/Components/CommonComponent/Loader";
import Btn from "@/Elements/Buttons/Btn";
import { userDetailAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { useAgentPasswordModal, useAgentGeneralModal } from "@/Utils/Zustand";
import { useEffect } from "react";
import { FaEdit, FaLock } from "react-icons/fa";
import { Card, Col, Row } from "reactstrap";
import UserPasswordModal from "./modal/user-password-modal";
import UserGeneralModal from "./modal/user-general-modal";

const UserGeneral = ({ params: { userId }, activeTab }) => {
  const { onOpen: agentPasswordOnOpen, setData: agentPasswordSetData } =
    useAgentPasswordModal();
  const { onOpen: agentGeneralOnOpen, setData: agentGeneralSetData } =
    useAgentGeneralModal();
  const {
    data,
    mutate: AgentDetailMutate,
    isLoading,
  } = useCreate(userDetailAPI, false, false, false);

  useEffect(() => {
    if (activeTab === "1") AgentDetailMutate({ id: userId });
  }, [userId, activeTab]);

  if (isLoading) return <Loader />;

  return (
    <>
      <UserPasswordModal />
      <UserGeneralModal refetch={() => AgentDetailMutate({ id: userId })} />

      <Btn
        onClick={() => {
          agentPasswordOnOpen();
          agentPasswordSetData(data?.data?.data);
        }}
        className="btn-sm mb-2"
      >
        <FaLock className="me-2" />
        Change Password
      </Btn>
      <Card className="rounded-2 mb-3">
        <Btn
          onClick={() => {
            agentGeneralOnOpen();
            agentGeneralSetData(data?.data?.data);
          }}
          className="btn-sm btn-danger ms-auto"
        >
          <FaEdit />
        </Btn>

        <Row className="mx-md-5 gap-3">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">User Name :</div>
            <h2>{data?.data?.data?.user_name}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Name :</div>
            <h2>{data?.data?.data?.name}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Phone Number :</div>
            <h2>{data?.data?.data?.phone_number ?? "-"}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Max Mix Bet :</div>
            <h2>{data?.data?.data?.max_mix_bet}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Max Single Bet :</div>
            <h2>{data?.data?.data?.max_single_bet}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Status :</div>
            <Btn
              style={{ cursor: "not-allowed" }}
              className={`${
                data?.data?.data?.block ? "btn btn-sm" : "btn btn-sm btn-theme"
              } w-50 fs-6 rounded-2`}
            >
              {data?.data?.data?.block ? "Banned" : "Active"}
            </Btn>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default UserGeneral;
