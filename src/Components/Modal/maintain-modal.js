"use client";

import Btn from "@/Elements/Buttons/Btn";
import request from "@/Utils/AxiosUtils";
import { maintainAPI } from "@/Utils/AxiosUtils/API";
import getCookie from "@/Utils/CustomFunctions/GetCookie";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Card, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Loader from "../CommonComponent/Loader";
import Lottie from "lottie-react";
import animationData from "/public/assets/json/maintain.json";

const MaintainModaleDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isFetching } = useQuery({
    queryKey: ["agentMaintain"],
    queryFn: () => request({ url: maintainAPI }).then((res) => res?.data),
  });

  useEffect(() => {
    if (data?.agent_maintain == 1) {
      setIsOpen(true);
    }
  }, [data?.agent_maintain]);

  return (
    <Modal
      fullscreen
      isOpen={isOpen}
      id="staticBackdrop"
      className={`theme-modal theme-form`}
    >
      <ModalHeader>Under Maintenance !</ModalHeader>
      <ModalBody className="d-flex flex-column align-items-center">
        <h3 className="text-center"># {data?.agent_text}</h3>
        <Lottie
          animationData={animationData}
          loop
          className="maintain-lottie"
        />
      </ModalBody>
    </Modal>
  );
};

export default MaintainModaleDialog;
