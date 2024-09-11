"use client";
import { useEffect, useState } from "react";
import request from "@/Utils/AxiosUtils";
import Loader from "@/Components/CommonComponent/Loader";
import { userReportAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { endOfDay, format, startOfDay } from "date-fns";
import { Card, Col, Row } from "reactstrap";
import CalenderFilter from "@/Components/Table/CalenderFilter";

const Report = ({ params: { userId }, activeTab }) => {
  const [date, setDate] = useState([
    {
      startDate: startOfDay(new Date()) || null,
      endDate: endOfDay(new Date()) || null,
      key: "selection",
    },
  ]);
  const { data, isLoading, refetch } = useQuery(
    ["userReport"],
    () =>
      request({
        url: `${userReportAPI}/${userId}`,
        method: "get",
        params: {
          start_date: format(date[0]?.startDate, "yyyy-MM-dd") ?? null,
          end_date: format(date[0]?.endDate, "yyyy-MM-dd") ?? null,
        },
      }),
    { refetchOnWindowFocus: false, refetchOnMount: false, cacheTime: 0 }
  );

  useEffect(() => {
    if (activeTab === "4") refetch();
  }, [userId, activeTab, date]);

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="fs-5 fw-bold border-start border-success border-4 ps-3">
          Report
        </div>
        <div className="col-sm-3 ms-auto">
          {date && <CalenderFilter date={date} setDate={setDate} />}
        </div>
      </div>
      <Card className="rounded-2 my-3">
        <Row className="mx-md-5 gap-3 py-3">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Total Deposit :</div>
            <h2>{data?.data?.data?.total_deposit}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Toal Withdraw :</div>
            <h2>{data?.data?.data?.total_withdraw}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Difference :</div>
            <h2>{data?.data?.data?.differential}</h2>
          </Col>
        </Row>

        <Row className="mx-md-5 gap-3 mt-5 py-3">
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Total Stake :</div>
            <h2>{data?.data?.data?.total_stake}</h2>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column gap-2">
            <div className="fst-italic">Toal Win :</div>
            <h2>{data?.data?.data?.total_win}</h2>
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column gap-2">
            <div className="fst-italic">Win / Loss :</div>
            <h2>{data?.data?.data?.win_lose}</h2>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Report;
