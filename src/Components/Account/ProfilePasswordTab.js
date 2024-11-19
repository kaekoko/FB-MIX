import { Field, Form, Formik } from "formik";
import {
  YupObject,
  nameSchema,
  passwordConfirmationSchema,
  passwordSchema,
} from "../../Utils/Validation/ValidationSchemas";
import SimpleInputField from "../InputFields/SimpleInputField";
import useCreate from "../../Utils/Hooks/useCreate";
import { updateProfilePassword } from "../../Utils/AxiosUtils/API";
import Btn from "../../Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { Col } from "reactstrap";
import { ReactstrapInput } from "../ReactstrapFormik";
import { RiEye2Fill } from "react-icons/ri";

const ProfilePasswordTab = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const [showPassword, setShowPassword] = useState({
    password: false,
    oldPassword: false,
    confirmPassword: false,
  });

  const { mutate, isLoading, isSuccess } = useCreate(
    updateProfilePassword,
    false,
    "/profile"
  );

  useEffect(() => {
    isSuccess && window.location.replace("/en/dashboard");
    console.log("render");
  }, [isSuccess]);

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
        password: passwordSchema,
        confirm_password: passwordConfirmationSchema,
      })}
      onSubmit={(values, { resetForm }) => {
        mutate(values);
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Col sm="12" className="mt-4">
            <div className="position-relative w-100">
              <div
                style={{ padding: "10px 0rem" }}
                className="position-absolute rounded-1 d-flex gap-3 align-items-center me-2 end-0"
              >
                <RiEye2Fill
                  onClick={() =>
                    setShowPassword((prev) => {
                      return {
                        ...showPassword,
                        oldPassword: !prev.oldPassword,
                      };
                    })
                  }
                  color={showPassword.oldPassword ? "blue" : "black"}
                  size={22}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <Field
                type={showPassword.oldPassword ? "text" : "password"}
                name="old_password"
                id="old_password"
                placeholder="Enter Current Password"
                component={ReactstrapInput}
              />
            </div>
          </Col>

          <Col sm="12" className="mt-4 pt-2">
            <div className="position-relative w-100">
              <div
                style={{ padding: "10px 0rem" }}
                className="position-absolute rounded-1 d-flex gap-3 align-items-center me-2 end-0"
              >
                <RiEye2Fill
                  onClick={() =>
                    setShowPassword((prev) => {
                      return {
                        ...showPassword,
                        password: !prev.password,
                      };
                    })
                  }
                  color={showPassword.password ? "blue" : "black"}
                  size={22}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <Field
                type={showPassword.password ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                component={ReactstrapInput}
              />
            </div>
          </Col>

          <Col sm="12" className="mt-4">
            <div className="position-relative w-100">
              <div
                style={{ padding: "10px 0rem" }}
                className="position-absolute rounded-1 d-flex gap-3 align-items-center me-2 end-0"
              >
                <RiEye2Fill
                  onClick={() =>
                    setShowPassword((prev) => {
                      return {
                        ...showPassword,
                        confirmPassword: !prev.confirmPassword,
                      };
                    })
                  }
                  color={showPassword.confirmPassword ? "blue" : "black"}
                  size={22}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <Field
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirm_password"
                id="confirm_password"
                placeholder="Enter Confirm Password"
                component={ReactstrapInput}
              />
            </div>
          </Col>

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
