"use client";

import "./captcha.css";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ReCaptcha from "react-numeric-captcha";
import ShowBox from "@/Elements/Alerts&Modals/ShowBox";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
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
import { toast } from "react-toastify";
import { Col } from "reactstrap";

const Login = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { mutate, isLoading } = useHandleLogin(setShowBoxMessage);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaVerification = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="box-wrapper">
      <ShowBox showBoxMessage={showBoxMessage} />
      <LoginBoxWrapper>
        <div className="log-in-title">
          <h3 className="fs-2">{t("Mega Sport 777")}</h3>
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
            onSubmit={(values) => {
              if (!captchaValue) {
                toast.error("Please complete the captcha!");
                return;
              }
              mutate(values);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="row gap-2">
                <Col sm="12">
                  <Field
                    name="user_name"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    id="user_name"
                    placeholder="User Name"
                    label="User Name"
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
                  <ReCaptcha
                    onChange={handleCaptchaVerification}
                    placeholder="Insert captcha" // optional
                  />
                </Col>
                <Col sm="12" className="mt-3">
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
