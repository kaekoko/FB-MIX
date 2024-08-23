import { depositWithdrawHistory } from "@/Data/TabTitleListData";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";

const DepositWithdrawFilter = ({ selectFilter, setSelectFilter }) => {
  return (
    <SearchableSelectInput
      nameList={[
        {
          name: "type",
          notitle: "true",
          inputprops: {
            name: "type",
            id: "type",
            options: depositWithdrawHistory || [],
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
