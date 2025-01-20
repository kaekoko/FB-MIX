import Loader from "@/Components/CommonComponent/Loader";
import request from "@/Utils/AxiosUtils";
import { selfData } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";

const ProfileInformation = () => {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["profile"],
    queryFn: () => request({ url: selfData }).then((res) => res?.data),
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (isFetching) return <Loader />;

  return (
    <>
      <Card className="rounded-2 mb-3">
        <Row className="mx-md-5 gap-3">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">User Name :</div>
            <h2>{data?.data?.user_name}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Name :</div>
            <h2>{data?.data?.name}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Phone Number :</div>
            <h2>{data?.data?.phone_number ?? "-"}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Max Mix Bet :</div>
            <h2>{data?.data?.max_mix_bet}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Max Single Bet :</div>
            <h2>{data?.data?.max_single_bet}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Single Bet Commission :</div>
            <h2>{data?.data?.single_bet_commission}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Euro Single Bet Commission :</div>
            <h2>{data?.data?.usa_single_bet_commission}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Euro Mix Bet Commission :</div>
            <h2>{data?.data?.usa_multiple_bet_commission}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Euro Max Single Bet :</div>
            <h2>{data?.data?.usa_max_single_bet}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Euro Max Mix Bet :</div>
            <h2>{data?.data?.usa_max_mix_bet}</h2>
          </Col>
        </Row>
      </Card>
      <div className="fs-4 my-2 text-muted">Mix Bet Commission</div>
      <Card className="rounded-2 border pt-3 bg-transparent">
        <Row className="mx-md-5 gap-3">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 2 :</div>
            <h2>{data?.data?.match_count_two}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 3 :</div>
            <h2>{data?.data?.match_count_three}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 4 :</div>
            <h2>{data?.data?.match_count_four}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 5 :</div>
            <h2>{data?.data?.match_count_five}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 6 :</div>
            <h2>{data?.data?.match_count_six}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 7 :</div>
            <h2>{data?.data?.match_count_seven}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 8 :</div>
            <h2>{data?.data?.match_count_eight}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 9 :</div>
            <h2>{data?.data?.match_count_nine}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 10 :</div>
            <h2>{data?.data?.match_count_ten}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-3 mt-md-5">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Match Count 11 :</div>
            <h2>{data?.data?.match_count_eleven}</h2>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProfileInformation;
