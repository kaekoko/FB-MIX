import {
  BET_TYPE_LIST,
  depositWithdrawHistory,
  eachBetslipForAll,
} from "@/Data/TabTitleListData";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";

const DepositWithdrawFilter = ({ selectFilter, setSelectFilter, type }) => {
  return (
    <SearchableSelectInput
      nameList={[
        {
          name: "type",
          notitle: "true",
          inputprops: {
            name: "type",
            id: "type",
            options:
              type === "betslip"
                ? eachBetslipForAll
                : type === "transaction"
                ? depositWithdrawHistory
                : BET_TYPE_LIST || [],
            value: "",
          },
          store: "obj",
          setvalue: (name, value) => {
            setSelectFilter(value);
          },
        },
      ]}
    />
  );
};

export default DepositWithdrawFilter;
