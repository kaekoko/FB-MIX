import Loader from "@/Components/CommonComponent/Loader";
import request from "@/Utils/AxiosUtils";
import { selfData } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Col, Row } from "reactstrap";

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
    <div className="fs-6">
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">User Name</Col>
        <Col className="text-center  fw-bold">{data?.data?.user_name}</Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">Phone Number</Col>
        <Col className="text-center  fw-bold">{data?.data?.phone_number}</Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">Balance</Col>
        <Col className="text-center  fw-bold">{data?.data?.balance}</Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">Max Single Bet</Col>
        <Col className="text-center  fw-bold">{data?.data?.max_single_bet}</Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">Max Mix Bet</Col>
        <Col className="text-center  fw-bold">{data?.data?.max_mix_bet}</Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">Single Bet Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.single_bet_commission}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">2 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_two}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">3 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_three}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">4 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_four}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">5 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_five}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">6 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_six}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">7 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_seven}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">8 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_eight}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">9 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_nine}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border-top border-start border-end">
        <Col className="text-start ms-4">10 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_ten}
        </Col>
      </Row>
      <Row className="mx-2 py-2 border">
        <Col className="text-start ms-4">11 Event Commision</Col>
        <Col className="text-center  fw-bold">
          {data?.data?.match_count_eleven}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInformation;
