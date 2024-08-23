"use client";

import { TabContent } from "reactstrap";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import ProfilePasswordTab from "@/Components/Account/ProfilePasswordTab";

const Account = () => {
  return (
    <FormWrapper title="Change Password">
      <div className="inside-horizontal-tabs mt-0">
        <TabContent>
          <ProfilePasswordTab />
        </TabContent>
      </div>
    </FormWrapper>
  );
};

export default Account;
