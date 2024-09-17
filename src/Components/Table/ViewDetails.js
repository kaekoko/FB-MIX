import React, { useState } from "react";
import { RiEyeLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import ViewDetailBody from "./ViewDetailBody";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import ViewDetailBodyMulti from "./ViewDetailBodyMulti";

const ViewDetails = ({ fullObj, tableData, refetch }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const redirectLink = () => {
    const userId = fullObj?.id;
    const username = fullObj?.user_name;
    if (tableData.redirectUrl === "/report/agent/") {
      router.push(`${tableData?.redirectUrl}/${username}`);
    } else {
      router.push(`${tableData?.redirectUrl}/${userId}`);
    }
  };
  return (
    <>
      <div>
        <a
          onClick={() => {
            tableData?.redirectUrl ? redirectLink() : setModal(true);
          }}
        >
          <RiEyeLine size={20} className="ri-pencil-line" />
        </a>
      </div>
      <ShowModal
        open={modal}
        title={`Betslip Details for ${fullObj?.user?.user_name}`}
        close={true}
        setModal={setModal}
        modalAttr={"modal-lg"}
      >
        {fullObj?.bet_type === "single" ? (
          <ViewDetailBody fullObj={fullObj} />
        ) : (
          <ViewDetailBodyMulti fullObj={fullObj} />
        )}
      </ShowModal>
    </>
  );
};

export default ViewDetails;
