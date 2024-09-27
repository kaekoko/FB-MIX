import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { FiBox, FiPercent } from "react-icons/fi";
import {
  RiFileTextLine,
  RiGroupLine,
  RiUser2Fill,
  RiWalletLine,
} from "react-icons/ri";
import { Card, CardHeader, CardBody, Col, Container, Row } from "reactstrap";
import request from "../../Utils/AxiosUtils";
import { AgentdashboardAPI } from "../../Utils/AxiosUtils/API";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import CalenderFilter from "../Table/CalenderFilter";
import { endOfDay, format, startOfDay } from "date-fns";
import Loader from "../CommonComponent/Loader";

const TopDashSection = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const [date, setDate] = useState([
    {
      startDate: startOfDay(new Date()) || null,
      endDate: endOfDay(new Date()) || null,
      key: "selection",
    },
  ]);
  const { data, isFetching, refetch } = useQuery(
    ["agentDashboard"],
    () =>
      request({
        url: `${AgentdashboardAPI}`,
        method: "get",
        params: {
          start_date: format(date[0]?.startDate, "yyyy-MM-dd") ?? null,
          end_date: format(date[0]?.endDate, "yyyy-MM-dd") ?? null,
        },
      }),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 0,
    }
  );

  console.log(data);

  useEffect(() => {
    !isFetching && refetch();
  }, [date]);

  if (isFetching) return <Loader />;

  return (
    <section className="dashboard-tiles">
      <Card className="border">
        <CardHeader className="d-md-flex align-items-center pb-3 bg-transparent px-0">
          <div className="fs-4 fw-bold">Dashboard</div>
          <div className="ms-auto">
            {date && <CalenderFilter date={date} setDate={setDate} />}
          </div>
        </CardHeader>

        <CardBody className="border bg-white rounded-3 rounded-bottom-0 border-bottom-0 p-3">
          <div className="fs-5 mb-2 text-muted">User Management</div>
          <Container fluid={true} className="p-sm-0">
            <Row className="g-3 py-2">
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total User")}</h6>
                    <h3>{data?.data?.data?.total_user}</h3>
                  </div>
                  <div className="icon-box">
                    <RiGroupLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Agent")}</h6>
                    <h3>{data?.data?.data?.total_agent}</h3>
                  </div>
                  <div className="icon-box">
                    <RiUser2Fill />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Current Balance")}</h6>
                    <h3>{data?.data?.data?.Current_balance}</h3>
                  </div>
                  <div className="icon-box">
                    <FiBox />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Down Line")}</h6>
                    <h3>
                      {Math.round(
                        Number(data?.data?.data?.Total_credit || 0) * 100
                      ) / 100}
                    </h3>
                  </div>
                  <div className="icon-box">
                    <FiPercent />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>

        <CardBody className="border bg-white rounded-3 rounded-top-0 rounded-bottom-0 border-top-0 border-bottom-0 p-3">
          <div className="fs-5 mb-2 text-muted">Transaction Report</div>
          <Container fluid={true} className="p-sm-0">
            <Row className="g-3 py-2">
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Deposit")}</h6>
                    <h3>{data?.data?.data?.total_deposit}</h3>
                  </div>
                  <div className="icon-box">
                    <RiWalletLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Withdraw")}</h6>
                    <h3>{data?.data?.data?.total_withdraw}</h3>
                  </div>
                  <div className="icon-box">
                    <RiFileTextLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Difference")}</h6>
                    <h3>{data?.data?.data?.different}</h3>
                  </div>
                  <div className="icon-box">
                    <FiPercent />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>

        <CardBody className="border bg-white rounded-3 rounded-top-0 rounded-bottom-0 border-top-0 border-bottom-0 p-3">
          <div className="fs-5 mb-2 text-muted">Betting Report</div>
          <Container fluid={true} className="p-sm-0">
            <Row className="g-3 py-2">
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Stake")}</h6>
                    <h3>{data?.data?.data?.total_stake}</h3>
                  </div>
                  <div className="icon-box">
                    <RiWalletLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Win")}</h6>
                    <h3>{data?.data?.data?.total_win}</h3>
                  </div>
                  <div className="icon-box">
                    <RiFileTextLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Commission")}</h6>
                    <h3>{data?.data?.data?.total_commission}</h3>
                  </div>
                  <div className="icon-box">
                    <FiBox />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Downline Commission")}</h6>
                    <h3>{data?.data?.data?.downline_commission}</h3>
                  </div>
                  <div className="icon-box">
                    <FiBox />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Win / Loss")}</h6>
                    <h3>
                      {Math.round(Number(data?.data?.data?.profit) * 100) / 100}
                    </h3>
                  </div>
                  <div className="icon-box">
                    <FiPercent />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>

        <CardBody className="border bg-white rounded-3 rounded-top-0 border-top-0 p-3">
          <div className="fs-5 mb-2 text-muted">User Betting Report</div>
          <Container fluid={true} className="p-sm-0">
            <Row className="g-3 py-2">
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Stake")}</h6>
                    <h3>{data?.data?.data?.self_total_stake}</h3>
                  </div>
                  <div className="icon-box">
                    <RiWalletLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Total Win")}</h6>
                    <h3>{data?.data?.data?.self_win_amount}</h3>
                  </div>
                  <div className="icon-box">
                    <RiFileTextLine />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Commission")}</h6>
                    <h3>{data?.data?.data?.self_agent_commission}</h3>
                  </div>
                  <div className="icon-box">
                    <FiBox />
                  </div>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className="card-tiles">
                  <div>
                    <h6>{t("Agent W/L")}</h6>
                    <h3>{data?.data?.data?.sefl_win_lose}</h3>
                  </div>
                  <div className="icon-box">
                    <FiPercent />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </section>
  );
};

export default TopDashSection;
