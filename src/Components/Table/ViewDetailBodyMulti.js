import { useContext } from "react";
import { Badge, Table } from "reactstrap";
import SettingContext from "../../Helper/SettingContext";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";

const ViewDetailBodyMulti = ({ fullObj }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const { convertCurrency } = useContext(SettingContext);
  console.log(fullObj);

  return (
    <div className="d-flex flex-column gap-2">
      {fullObj.multiple_bets.map((a) => (
        <>
          <div className="fw-bold fs-6">{a.upcoming?.league_name}</div>
          <div className="bg-dark rounded-2 p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="py-2">Time : {a.upcoming?.start_time}</div>
              <span className="badge-info rounded-5 px-2">{a?.status}</span>
            </div>
            <div
              className="d-flex justify-content-between p-0 gap-2"
              style={{ height: "6rem" }}
            >
              <div
                className={`${
                  a.bet_choice === "home"
                    ? "btn-theme"
                    : "border border-2 border-secondary"
                } w-100 text-center d-flex justify-content-center gap-2 align-items-center rounded-3`}
              >
                {a.upcoming?.home_name}{" "}
                {a.bet_choice === "home" && (
                  <span
                    className="badge-info rounded-3"
                    style={{ fontSize: "11px", padding: "3px" }}
                  >
                    {a.goal_total == 0 ? "=" : a.goal_total}{" "}
                    {a.odds > 0 ? "+" : ""} {a.odds == 0 ? "=" : a.odds}
                  </span>
                )}
              </div>
              <div className="col-2 d-flex gap-2 justify-content-between p-0">
                <div className="border border-2 border-secondary w-100 d-flex justify-content-center align-items-center fw-bold rounded-2 overflow-hidden">
                  {a.upcoming?.home_score}
                </div>
                <div className="border border-2 border-secondary w-100 d-flex justify-content-center align-items-center fw-bold rounded-2 overflow-hidden">
                  {a.upcoming?.away_score}
                </div>
              </div>
              <div
                className={`${
                  a.bet_choice === "away"
                    ? "btn-theme"
                    : "border border-2 border-secondary"
                } w-100 text-center d-flex justify-content-center align-items-center rounded-3`}
              >
                {a.upcoming?.away_name}
                {a.bet_choice === "away" && (
                  <span
                    className="badge-info rounded-3"
                    style={{ fontSize: "11px", padding: "3px" }}
                  >
                    {a.goal_total == 0 ? "=" : a.goal_total}{" "}
                    {a.odds > 0 ? "+" : ""} {a.odds == 0 ? "=" : a.odds}
                  </span>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2 gap-2">
              <div
                className={`${
                  a.bet_choice === "over"
                    ? "btn-theme"
                    : "border border-2 border-secondary"
                } w-100 py-2 d-flex justify-content-center align-items-center text-center rounded-3`}
              >
                Over
              </div>
              {(a.bet_choice === "under" || a.bet_choice === "over") && (
                <div className="d-flex col-2 align-items-center justify-content-center border border-2 border-secondary">
                  {a.goal_total == 0 ? "=" : a.goal_total}{" "}
                  {a.odds > 0 ? "+" : ""} {a.odds == 0 ? "=" : a.odds}
                </div>
              )}
              <div
                className={`${
                  a.bet_choice === "under"
                    ? "btn-theme"
                    : "border border-2 border-secondary"
                } w-100 py-2 d-flex justify-content-center align-items-center text-center rounded-3`}
              >
                Under
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="d-flex justify-content-between mt-2 px-1 w-100">
        <div className="text-start">Stake</div>
        <div className="">{fullObj?.stake}</div>
      </div>
      <div className="d-flex justify-content-between mt-2 px-1 w-100">
        <div className="text-start">Win Amount</div>
        <div className="">{fullObj?.return_amount}</div>
      </div>
      <div className="d-flex justify-content-between mt-2 px-1 w-100">
        <div className="text-start">Net Profit</div>
        <div className="">
          {fullObj?.status === "pending"
            ? 0
            : fullObj?.return_amount - fullObj?.stake}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailBodyMulti;
