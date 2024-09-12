"use client";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowBox from "@/Elements/Alerts&Modals/ShowBox";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import SettingContext from "@/Helper/SettingContext";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import useHandleLogin from "@/Utils/Hooks/Auth/useLogin";
import {
  YupObject,
  nameSchema,
  passwordSchema,
} from "@/Utils/Validation/ValidationSchemas";
import { useTranslation } from "@/app/i18n/client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { Col } from "reactstrap";

const Login = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { mutate, isLoading } = useHandleLogin(setShowBoxMessage);

  return (
    <div className="box-wrapper">
      <ShowBox showBoxMessage={showBoxMessage} />
      <LoginBoxWrapper>
        <div className="log-in-title">
          <h3>{t("Football Website")}</h3>
          <h5>{t("LogInYourAccount")}</h5>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              user_name: "",
              password: "",
            }}
            validationSchema={YupObject({
              user_name: nameSchema,
              password: passwordSchema,
            })}
            onSubmit={mutate}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="row g-2">
                <Col sm="12">
                  <Field
                    name="user_name"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    id="user_name"
                    placeholder="User Name"
                    label="Username"
                  />
                </Col>
                <Col sm="12">
                  <Field
                    name="password"
                    component={ReactstrapInput}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    label="Password"
                  />
                </Col>

                <Col sm="12">
                  <Btn
                    title="Login"
                    className="btn btn-animation w-100 justify-content-center"
                    type="submit"
                    color="false"
                    loading={Number(isLoading)}
                  />
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </LoginBoxWrapper>
    </div>
  );
};

export default Login;
