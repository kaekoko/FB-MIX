"use client";

import Btn from "@/Elements/Buttons/Btn";
import request from "@/Utils/AxiosUtils";
import { agentRulesAPI } from "@/Utils/AxiosUtils/API";
import getCookie from "@/Utils/CustomFunctions/GetCookie";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Loader from "../CommonComponent/Loader";

const RuleModalDialog = () => {
  const isLoggedIn = !!getCookie("uat");
  const [isOpen, setIsOpen] = useState(localStorage.getItem("rule_toggle"));

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["agentRules"],
    queryFn: () => request({ url: agentRulesAPI }).then((res) => res?.data),
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
    enabled: isLoggedIn && isOpen === "true",
  });

  if (isLoading || isFetching) return <Loader />;
  return (
    <Modal
      isOpen={isOpen === "true" && isLoggedIn}
      id="staticBackdrop"
      className={`theme-modal theme-form`}
    >
      <ModalHeader>Rule and regulations</ModalHeader>
      <ModalBody dangerouslySetInnerHTML={{ __html: data?.data?.agent_rule }} />
      <ModalFooter>
        <Btn
          onClick={() => {
            setIsOpen(false);
            localStorage.setItem("rule_toggle", false);
          }}
          className="btn-theme btn-sm"
          title="Yes, I understand and Agree"
        />
      </ModalFooter>
    </Modal>
  );
};

export default RuleModalDialog;
