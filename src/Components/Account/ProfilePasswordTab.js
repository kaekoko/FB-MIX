import { Form, Formik } from "formik";
import {
  YupObject,
  nameSchema,
  passwordConfirmationSchema,
} from "../../Utils/Validation/ValidationSchemas";
import SimpleInputField from "../InputFields/SimpleInputField";
import useCreate from "../../Utils/Hooks/useCreate";
import { updateProfilePassword } from "../../Utils/AxiosUtils/API";
import Btn from "../../Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { useContext } from "react";
import { useTranslation } from "@/app/i18n/client";

const ProfilePasswordTab = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const { mutate, isLoading } = useCreate(
    updateProfilePassword,
    false,
    "/profile"
  );
  return (
    <Formik
      enableReinitialize
      initialValues={{
        old_password: "",
        password: "",
        confirm_password: "",
      }}
      validationSchema={YupObject({
        old_password: nameSchema,
        password: nameSchema,
        confirm_password: passwordConfirmationSchema,
      })}
      onSubmit={(values, { resetForm }) => {
        mutate(values);
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <SimpleInputField
            nameList={[
              {
                name: "old_password",
                title: "Current Password",
                placeholder: t("EnterCurrentPassword"),
                require: "true",
                type: "password",
              },
              {
                name: "password",
                title: "Password",
                require: "true",
                placeholder: t("EnterNewPassword"),
                type: "password",
              },
              {
                name: "confirm_password",
                title: "Confirm Password",
                require: "true",
                placeholder: t("EnterConfirmPassword"),
                type: "password",
              },
            ]}
          />
          <Btn
            className="btn btn-theme ms-auto mt-4"
            type="submit"
            title="Save"
            loading={Number(isLoading)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ProfilePasswordTab;
