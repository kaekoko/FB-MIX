import React, { useContext, useEffect, useState } from "react";

import { Form, Input, Label } from "reactstrap";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import TableDeleteOption from "./TableDeleteOption";
import TableDuplicateOption from "./TableDuplicateOption";
import CalenderFilter from "./CalenderFilter";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import { topStoreOption } from "@/Data/TabTitleListData";
import DepositWithdrawFilter from "./DepositWithdrawFilter";

const TableTop = (props) => {
  const {
    setPaginate,
    setSearch,
    paginate,
    url,
    isCheck,
    setIsCheck,
    isReplicate,
    refetch,
    dateRange,
    date,
    setDate,
    filterHeader,
    keyInPermission,
    selectFilter,
    setSelectFilter,
    betType,
    setBetType,
  } = props;
  const [edit, destroy] = usePermissionCheck(
    ["edit", "destroy"],
    keyInPermission ? keyInPermission : ""
  );
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const [input, setInput] = useState();
  const [text, setText] = useState("");
  const [tc, setTc] = useState(null);
  useEffect(() => {
    setInput(paginate);
  }, [paginate]);

  const onChange = (text) => {
    if (tc) clearTimeout(tc);
    setTc(setTimeout(() => setSearch(text), 1000));
  };

  return (
    <div className="show-box">
      {filterHeader?.noPageDrop !== true &&
        filterHeader?.onlyNoPageDrop !== true && <></>}

      {filterHeader?.filterSelect && (
        <DepositWithdrawFilter
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
          type={filterHeader?.isBetSlip ? "betslip" : "transaction"}
        />
      )}
      {/* Bet Type Filter */}
      {filterHeader?.betType && (
        <DepositWithdrawFilter
          selectFilter={betType}
          setSelectFilter={setBetType}
          type={"BETTYPE"}
        />
      )}

      {dateRange && <CalenderFilter date={date} setDate={setDate} />}

      {filterHeader?.noSearch !== true && (
        <div className="d-flex gap-2 ms-auto mt-2 mt-md-0">
          <Label htmlFor="role-search" className="form-label">
            {t("Search")}:
          </Label>

          <Input
            type="search"
            className="form-control"
            id="role-search"
            value={text}
            onChange={(e) => {
              onChange(e.target.value);
              setText(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TableTop;
