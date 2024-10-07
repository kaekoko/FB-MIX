"use client";

import { useContext } from "react";
import { user } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import I18NextContext from "@/Helper/I18NextContext";
import StaffFormCreate from "./staffForm";

const StaffCreatePage = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { mutate, isLoading } = useCreate(user, false, `/${i18Lang}/user`);
  return (
    <FormWrapper title="Create Staff">
      <StaffFormCreate mutate={mutate} loading={isLoading} />
    </FormWrapper>
  );
};

export default StaffCreatePage;
