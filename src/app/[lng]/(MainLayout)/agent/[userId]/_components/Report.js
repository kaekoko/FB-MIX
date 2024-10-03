"use client";
import { useEffect, useState } from "react";
import request from "@/Utils/AxiosUtils";
import Loader from "@/Components/CommonComponent/Loader";
import { AgentReportAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { endOfDay, format, startOfDay } from "date-fns";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import CalenderFilter from "@/Components/Table/CalenderFilter";

const AgentReport = ({ params: { userId }, activeTab }) => {
  const [date, setDate] = useState([
    {
      startDate: startOfDay(new Date()) || null,
      endDate: endOfDay(new Date()) || null,
      key: "selection",
    },
  ]);
  const { data, isFetching, refetch } = useQuery(
    ["userReport"],
    () =>
      request({
        url: `${AgentReportAPI}/${userId}`,
        method: "get",
        params: {
          start_date: format(date[0]?.startDate, "yyyy-MM-dd") ?? null,
          end_date: format(date[0]?.endDate, "yyyy-MM-dd") ?? null,
        },
      }),
    {
      refetchOnMount: false,
      cacheTime: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 10,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (activeTab === "4") refetch();
  }, [userId, activeTab, date]);

  if (isFetching) return <Loader />;
  return (
    <Card className="bg-transparent border">
      <CardHeader className="d-md-flex align-items-center pb-3 bg-transparent px-0">
        <div className="fs-4 fw-bold ps-md-3">Report</div>
        <div className="col-12 col-sm-3 ms-auto">
          {date && <CalenderFilter date={date} setDate={setDate} />}
        </div>
      </CardHeader>
      <CardBody>
        <Card className="rounded-2">
          <div className="fs-5 border-start border-success border-4 ps-3">
            Transaction report
          </div>
          <Row className="mx-md-5 gap-3 gap-md-0 py-3 mt-4">
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Total Deposit :</div>
              <h2>{data?.data?.data?.total_deposit}</h2>
            </Col>
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Toal Withdraw :</div>
              <h2>{data?.data?.data?.total_withdraw}</h2>
            </Col>
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Difference :</div>
              <h2>{data?.data?.data?.different}</h2>
            </Col>
          </Row>
        </Card>

        <Card>
          <div className="fs-5 border-start border-success border-4 ps-3">
            Betting report
          </div>
          <Row className="mx-md-5 gap-3 gap-md-0 py-3 mt-4">
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Total Betamount :</div>
              <h2>{data?.data?.data?.total_stake}</h2>
            </Col>
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Toal Win :</div>
              <h2>{data?.data?.data?.total_win}</h2>
            </Col>
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Commission :</div>
              <h2>{data?.data?.data?.total_commission}</h2>
            </Col>
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Profit :</div>
              <h2>{data?.data?.data?.profit}</h2>
            </Col>
          </Row>
        </Card>

        <Card className="rounded-2">
          <div className="fs-5 border-start border-success border-4 ps-3">
            Total count overview
          </div>
          <Row className="mx-md-5 gap-3 gap-md-0 py-3 mt-4">
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Total User :</div>
              <h2>{data?.data?.data?.total_user}</h2>
            </Col>
            <Col sm={12} md={3} className="d-flex flex-column gap-2">
              <div className="fst-italic">Total Agent :</div>
              <h2>{data?.data?.data?.total_agent}</h2>
            </Col>
          </Row>
        </Card>
      </CardBody>
    </Card>
  );
};

export default AgentReport;
