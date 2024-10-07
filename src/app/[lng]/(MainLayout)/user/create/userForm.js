import { Field, Form, Formik, setFieldValue } from "formik";
import * as Yup from "yup";

import I18NextContext from "@/Helper/I18NextContext";
import { useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { userCreateAPI } from "@/Utils/AxiosUtils/API";
import {
  nameSchema,
  passwordSchema,
  phoneSchema,
  usernameSchema,
  YupObject,
} from "@/Utils/Validation/ValidationSchemas";
import Btn from "@/Elements/Buttons/Btn";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import { Col, Row } from "reactstrap";
import AccountContext from "@/Helper/AccountContext";
import { RiEye2Fill, RiFileCopyFill, RiLockPasswordFill } from "react-icons/ri";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";

const UserFormCreate = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const { accountData } = useContext(AccountContext);
  const [showPassword, setShowPassword] = useState(false);
  const [initialPassword, setInitialPassword] = useState("");
  const { mutate, isLoading } = useAgentCreate({
    url: userCreateAPI,
    path: `/${i18Lang}/user`,
  });

  const generatePassword = () => {
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}[]|:;<>,.?/~";
    let generatedPassword = "";
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setInitialPassword(generatedPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(initialPassword);
    alert("Copied password to clipboard");
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        password: "",
        name: "",
        user_name: "",
        phone_number: "",
        max_single_bet: Number(accountData?.max_single_bet || 0),
        max_mix_bet: Number(accountData?.max_mix_bet || 0),
        feature_max_single_bet: Number(
          accountData?.feature_max_single_bet || 0
        ),
      }}
      validationSchema={YupObject({
        name: nameSchema,
        user_name: Yup.string().required().max(6).min(6),
        phone_number: Yup.string().min(6).max(15),
        password: passwordSchema,
        max_single_bet: Yup.number()
          .required()
          .max(Number(accountData?.max_single_bet)),
        max_mix_bet: Yup.number()
          .required()
          .max(Number(accountData?.max_mix_bet)),
        feature_max_single_bet: Yup.number()
          .required()
          .max(Number(accountData?.feature_max_single_bet)),
      })}
      onSubmit={(values, { resetForm }) => {
        values["user_name"] =
          accountData?.user_name.substring(3) + values["user_name"];
        values["agent_id"] = accountData?.id;
        console.log(values);

        mutate(values);
        resetForm();
      }}
    >
      {({ setFieldValue }) => (
        <Form className="">
          <Row>
            <Col sm="12" md="6">
              <label for="user_name" className="fw-bold">
                User Name :{" "}
                <span className="small text-danger">
                  Must be 6 characters long!
                </span>
              </label>
              <div className="position-relative">
                <div
                  style={{ padding: "10px 0rem", width: "6rem" }}
                  className="bg-dark position-absolute rounded-1 d-flex justify-content-center align-items-center top-0 left-0"
                >
                  {accountData?.user_name.substring(3) || "..."}
                </div>
                <Field
                  type="text"
                  name="user_name"
                  id="user_name"
                  style={{ textIndent: "5.5rem", fontWeight: "bold" }}
                  maxLength={6}
                  minLength={6}
                  component={ReactstrapInput}
                />
              </div>
            </Col>

            <Col sm="12" md="6">
              <label for="name" className="fw-bold">
                Name :
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                component={ReactstrapInput}
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm="12" md="6">
              <label for="phone_number" className="fw-bold">
                Phone Number :
              </label>

              <Field
                type="tel"
                name="phone_number"
                id="phone_number"
                placeholder="Mobile Number"
                component={ReactstrapInput}
              />
            </Col>

            <Col sm="12" md="6">
              <label for="password" className="fw-bold">
                Password :
              </label>
              <div className="position-relative  w-100">
                <div
                  style={{ padding: "10px 0rem" }}
                  className="position-absolute rounded-1 d-flex gap-3 align-items-center me-2 end-0"
                >
                  <RiEye2Fill
                    onClick={() => setShowPassword(!showPassword)}
                    color={showPassword ? "blue" : ""}
                    size={22}
                    style={{ cursor: "pointer" }}
                  />
                  <RiLockPasswordFill
                    role="button"
                    onClick={() => {
                      generatePassword();
                      setFieldValue("password", initialPassword);
                    }}
                    size={22}
                  />
                  <RiFileCopyFill
                    role="button"
                    onClick={copyPassword}
                    size={22}
                  />
                </div>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  component={ReactstrapInput}
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm="12" md="4">
              <label for="max_mix_bet" className="fw-bold">
                Max Mix Bet :
              </label>

              <Field
                type="number"
                name="max_mix_bet"
                id="max_mix_bet"
                component={ReactstrapInput}
                required
              />
            </Col>

            <Col sm="12" md="4">
              <label for="max_single_bet" className="fw-bold">
                Max Single Bet :
              </label>

              <Field
                type="number"
                name="max_single_bet"
                id="max_single_bet"
                component={ReactstrapInput}
                required
              />
            </Col>
            <Col sm="12" md="4">
              <label for="feature_max_single_bet" className="fw-bold">
                Feature Max Single Bet :
              </label>

              <Field
                type="number"
                name="feature_max_single_bet"
                id="feature_max_single_bet"
                component={ReactstrapInput}
                required
              />
            </Col>
          </Row>

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

export default UserFormCreate;
