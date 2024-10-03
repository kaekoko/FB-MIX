import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import Btn from "../../Elements/Buttons/Btn";
import Pluralize from "../../Utils/CustomFunctions/Pluralize";
import NoSsr from "../../Utils/HOC/NoSsr";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import ImportExport from "./ImportExport";

const TableTitle = ({
  moduleName,
  onlyTitle,
  type,
  filterHeader,
  importExport,
  refetch,
  data,
}) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="title-header option-title">
      <h5>
        {filterHeader?.customTitle
          ? t(filterHeader?.customTitle)
          : t(Pluralize(moduleName))}
      </h5>
      {importExport && (
        <ImportExport
          importExport={importExport}
          moduleName={Pluralize(moduleName)}
          refetch={refetch}
        />
      )}
      <NoSsr>
        {filterHeader?.customFilter && filterHeader?.customFilter}
        {filterHeader?.isCreate && (
          <Btn
            className="align-items-center btn-theme btn-sm add-button"
            title={t("Add") + " " + t(moduleName)}
            onClick={() =>
              router.push(`/${i18Lang}/${pathname.split("/")[2]}/create`)
            }
          >
            <FiPlus />
          </Btn>
        )}
      </NoSsr>
      {filterHeader?.isDetail && data && (
        <>
          {data?.data && (
            <div className="d-flex flex-wrap gap-3">
              {data?.data?.total_stake ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Betamount : </span>
                    <span>{Number(data?.data?.total_stake || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_commission ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Commission : </span>
                    <span>{Number(data?.data?.total_commission || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_return_amount ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Win : </span>
                    <span>{Number(data?.data?.total_return_amount || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.win_lose ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Profit : </span>
                    <span>{Number(data?.data?.win_lose || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Slip : </span>
                    <span>{Number(data?.data?.total || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_balance ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Balance : </span>
                    <span>{Number(data?.data?.total_balance || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
            </div>
          )}
        </>
      )}

      {filterHeader?.isReportDetail && data && (
        <>
          {data?.data && (
            <div className="d-flex flex-wrap gap-3">
              {data?.data?.totalStake ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Betamount : </span>
                    <span>{Number(data?.data?.totalStake || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.totalCommission ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Commission : </span>
                    <span>{Number(data?.data?.totalCommission || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.totalWin ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Reward : </span>
                    <span>{Number(data?.data?.totalWin || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.totalWinLose ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total W/L : </span>
                    <span>{Number(data?.data?.totalWinLose || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_player_win_lose ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Player W/L : </span>
                    <span>
                      {Math.round(
                        Number(data?.data?.total_player_win_lose || 0) * 100
                      ) / 100}
                    </span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_agent_win_lose ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Agent W/L : </span>
                    <span>
                      {Math.round(
                        Number(data?.data?.total_agent_win_lose || 0) * 100
                      ) / 100}
                    </span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
            </div>
          )}
        </>
      )}

      {filterHeader?.isTransactionDetail && data && (
        <>
          {data?.data && (
            <div className="d-flex flex-wrap gap-3">
              {data?.data?.total_deposit ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Deposit : </span>
                    <span>{Number(data?.data?.total_deposit || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_withdraw >= 0 ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Withdraw : </span>
                    <span>{Number(data?.data?.total_withdraw || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
              {data?.data?.total_difference ? (
                <Btn className="btn-theme btn-sm">
                  <div className="d-flex gap-1 fw-bold">
                    <span>Total Diffrenece : </span>
                    <span>{Number(data?.data?.total_difference || 0)}</span>
                  </div>
                </Btn>
              ) : (
                <></>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TableTitle;
