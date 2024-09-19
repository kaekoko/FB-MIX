import React, { useContext } from "react";
import Pagination from "./Pagination";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";

const TableBottom = ({
  current_page,
  total,
  per_page,
  setPage,
  filterHeader,
}) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  return (
    <div className="card-bottom">
      {filterHeader?.notPaginate !== true && (
        <Pagination
          current_page={current_page}
          total={total}
          per_page={per_page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default TableBottom;
