import { useContext } from "react";
import { Badge, Table } from "reactstrap";
import SettingContext from "../../Helper/SettingContext";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";

const ViewDetailBody = ({ fullObj }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const { convertCurrency } = useContext(SettingContext);

  return (
    <>
      <div className="fw-bold fs-6">
        {fullObj?.single_bets?.[0]?.upcoming?.league_name}
      </div>
      <div className="bg-dark rounded-2 p-2">
        <div className="py-2">
          Time : {fullObj?.single_bets?.[0]?.upcoming?.start_time}
        </div>
        <div
          className="d-flex justify-content-between p-0 gap-2"
          style={{ height: "6rem" }}
        >
          <div
            className={`${
              fullObj?.single_bets?.[0]?.bet_choice === "home"
                ? "btn-theme"
                : "border border-2 border-secondary"
            } w-100 text-center d-flex justify-content-center gap-2 align-items-center rounded-3`}
          >
            {fullObj?.single_bets?.[0]?.upcoming?.home_name}{" "}
            {fullObj?.single_bets?.[0]?.upcoming?.homeupper == 1 && (
              <span
                className="badge-info rounded-3"
                style={{ fontSize: "11px", padding: "3px" }}
              >
                {fullObj?.single_bets?.[0]?.goal_total == 0
                  ? "="
                  : fullObj?.single_bets?.[0]?.goal_total}{" "}
                {fullObj?.single_bets?.[0]?.odds > 0 ? "+" : ""}{" "}
                {fullObj?.single_bets?.[0]?.odds == 0
                  ? "="
                  : fullObj?.single_bets?.[0]?.odds}
              </span>
            )}
          </div>
          <div className="col-2 d-flex gap-2 justify-content-between p-0">
            <div className="border border-2 border-secondary w-100 d-flex justify-content-center align-items-center fw-bold rounded-2 overflow-hidden">
              {fullObj?.single_bets?.[0]?.upcoming?.home_score}
            </div>
            <div className="border border-2 border-secondary w-100 d-flex justify-content-center align-items-center fw-bold rounded-2 overflow-hidden">
              {fullObj?.single_bets?.[0]?.upcoming?.away_score}
            </div>
          </div>
          <div
            className={`${
              fullObj?.single_bets?.[0]?.bet_choice === "away"
                ? "btn-theme"
                : "border border-2 border-secondary"
            } w-100 text-center d-flex justify-content-center align-items-center rounded-3`}
          >
            {fullObj?.single_bets?.[0]?.upcoming?.away_name}
            {fullObj?.single_bets?.[0]?.upcoming?.homeupper == 0 && (
              <span
                className="badge-info rounded-3"
                style={{ fontSize: "11px", padding: "3px" }}
              >
                {fullObj?.single_bets?.[0]?.goal_total == 0
                  ? "="
                  : fullObj?.single_bets?.[0]?.goal_total}{" "}
                {fullObj?.single_bets?.[0]?.odds > 0 ? "+" : ""}{" "}
                {fullObj?.single_bets?.[0]?.odds == 0
                  ? "="
                  : fullObj?.single_bets?.[0]?.odds}
              </span>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2 gap-2">
          <div
            className={`${
              fullObj?.single_bets?.[0]?.bet_choice === "over"
                ? "btn-theme"
                : "border border-2 border-secondary"
            } w-100 py-2 d-flex justify-content-center align-items-center text-center rounded-3`}
          >
            Over
          </div>
          {(fullObj?.single_bets?.[0]?.bet_choice === "under" ||
            fullObj?.single_bets?.[0]?.bet_choice === "over") && (
            <div className="d-flex col-2 align-items-center justify-content-center border border-2 border-secondary">
              {fullObj?.single_bets?.[0]?.goal_total == 0
                ? "="
                : fullObj?.single_bets?.[0]?.goal_total}{" "}
              {fullObj?.single_bets?.[0]?.odds > 0 ? "+" : ""}{" "}
              {fullObj?.single_bets?.[0]?.odds == 0
                ? "="
                : fullObj?.single_bets?.[0]?.odds}
            </div>
          )}
          <div
            className={`${
              fullObj?.single_bets?.[0]?.bet_choice === "under"
                ? "btn-theme"
                : "border border-2 border-secondary"
            } w-100 py-2 d-flex justify-content-center align-items-center text-center rounded-3`}
          >
            Under
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2 px-1 w-100">
          <div className="text-start">Betamount</div>
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
    </>
  );
};

export default ViewDetailBody;
