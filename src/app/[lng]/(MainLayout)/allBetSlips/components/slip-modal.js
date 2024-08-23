"use client";

import ShowModal from "@/Elements/Alerts&Modals/Modal";
import { useSlipModal } from "@/Utils/Zustand";

const SlipModal = () => {
  const { open, data } = useSlipModal();
  return (
    <div>
      <ShowModal
        open={open}
        modalAttr={{
          className: "media-modal modal-dialog modal-dialog-centered modal-xl",
        }}
        close={true}
        title={"Mix Parlay Slip"}
        noClass={true}
      >
        <div>{data}</div>
      </ShowModal>
    </div>
  );
};

export default SlipModal;
