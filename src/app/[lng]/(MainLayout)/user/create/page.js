"use client";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import { user } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import I18NextContext from "@/Helper/I18NextContext";
import { useContext } from "react";
import UserFormCreate from "./userForm";

const AgentCreate = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { mutate, isLoading } = useCreate(user, false, `/${i18Lang}/user`);
  return (
    <FormWrapper title="Create User">
      <UserFormCreate mutate={mutate} loading={isLoading} />
    </FormWrapper>
  );
};

export default AgentCreate;
