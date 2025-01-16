import Loader from "@/Components/CommonComponent/Loader";
import Btn from "@/Elements/Buttons/Btn";
import { AgentDetailAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import {
  useAgentPasswordModal,
  useAgentGeneralModal,
  useAgentCommissionModal,
} from "@/Utils/Zustand";
import { useContext, useEffect } from "react";
import { FaEdit, FaLock } from "react-icons/fa";
import { Card, Col, Row } from "reactstrap";
import AgentGeneralModal from "./modal/agent-general-modal";
import AgentCommissionModal from "./modal/agent-commission-model";
import AgentPasswordModal from "./modal/agent-password-modal";
import AccountContext from "@/Helper/AccountContext";

const AgentGeneral = ({ params: { userId }, activeTab }) => {
  const { accountData } = useContext(AccountContext);
  const { onOpen: agentPasswordOnOpen, setData: agentPasswordSetData } =
    useAgentPasswordModal();
  const { onOpen: agentGeneralOnOpen, setData: agentGeneralSetData } =
    useAgentGeneralModal();
  const { onOpen: agentCommissionOnOpen, setData: agentCommissionSetData } =
    useAgentCommissionModal();
  const {
    data,
    mutate: AgentDetailMutate,
    isLoading,
  } = useCreate(AgentDetailAPI, false, false, false);

  useEffect(() => {
    if (activeTab === "1") AgentDetailMutate({ id: userId });
  }, [userId, activeTab]);

  if (isLoading) return <Loader />;

  return (
    <>
      <AgentPasswordModal />
      <AgentGeneralModal refetch={() => AgentDetailMutate({ id: userId })} />
      <AgentCommissionModal refetch={() => AgentDetailMutate({ id: userId })} />

      {data?.data?.data?.self_agent_id === accountData?.id && (
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
      )}
      <Card className="rounded-2 mb-3">
        {data?.data?.data?.self_agent_id === accountData?.id && (
          <Btn
            onClick={() => {
              agentGeneralOnOpen();
              agentGeneralSetData(data?.data?.data);
            }}
            className="btn-sm btn-danger ms-auto"
          >
            <FaEdit />
          </Btn>
        )}

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
            <div className="fst-italic">Single Bet Commission :</div>
            <h2>{data?.data?.data?.single_bet_commission}</h2>
          </Col>
        </Row>
        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Feature Max Single Bet :</div>
            <h2>{data?.data?.data?.feature_max_single_bet}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Euro Single Bet Commission :</div>
            <h2>{data?.data?.data?.usa_single_bet_commission}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Euro Multiple Bet Commission :</div>
            <h2>{data?.data?.data?.usa_multiple_bet_commission}</h2>
          </Col>
        </Row>
      </Card>
      <div className="fs-4 my-2 text-muted">Mix Bet Commission</div>
      <Card className="rounded-2 border pt-3 bg-transparent">
        {data?.data?.data?.self_agent_id === accountData?.id && (
          <Btn
            onClick={() => {
              agentCommissionOnOpen();
              agentCommissionSetData(data?.data?.data);
            }}
            className="btn-sm btn-danger ms-auto"
          >
            <FaEdit />
          </Btn>
        )}

        <Row className="mx-md-5 gap-3">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 2 :</div>
            <h2>{data?.data?.data?.match_count_two}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 3 :</div>
            <h2>{data?.data?.data?.match_count_three}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 4 :</div>
            <h2>{data?.data?.data?.match_count_four}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 5 :</div>
            <h2>{data?.data?.data?.match_count_five}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 6 :</div>
            <h2>{data?.data?.data?.match_count_six}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 7 :</div>
            <h2>{data?.data?.data?.match_count_seven}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 8 :</div>
            <h2>{data?.data?.data?.match_count_eight}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 9 :</div>
            <h2>{data?.data?.data?.match_count_nine}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 10 :</div>
            <h2>{data?.data?.data?.match_count_ten}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 11 :</div>
            <h2>{data?.data?.data?.match_count_eleven}</h2>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default AgentGeneral;
