"use client";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import AgentForm from "./agentForm";
import { user } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import I18NextContext from "@/Helper/I18NextContext";
import { useContext } from "react";

const AgentCreate = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { mutate, isLoading } = useCreate(user, false, `/${i18Lang}/user`);
  return (
    <FormWrapper title="Create Agent">
      <AgentForm mutate={mutate} loading={isLoading} />
    </FormWrapper>
  );
};

export default AgentCreate;
