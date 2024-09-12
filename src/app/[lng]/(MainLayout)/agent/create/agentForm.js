import { Field, Form, Formik, setFieldValue } from "formik";
import * as Yup from "yup";

import I18NextContext from "@/Helper/I18NextContext";
import { useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import useCreate from "@/Utils/Hooks/useCreate";
import { AgentCreateAPI } from "@/Utils/AxiosUtils/API";
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
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";

const AgentForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const { accountData } = useContext(AccountContext);
  const [showPassword, setShowPassword] = useState(false);
  const [initialPassword, setInitialPassword] = useState("");
  const { mutate, isLoading } = useAgentCreate({
    url: AgentCreateAPI,
    path: `/${i18Lang}/agent`,
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

  console.log(accountData);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        password: "",
        name: "",
        user_name: "",
        phone_number: "",
        max_single_bet: "",
        max_mix_bet: "",
        single_bet_commission: Number(accountData?.single_bet_commission || 0),
        match_count_two: Number(accountData?.match_count_two || 0),
        match_count_three: Number(accountData?.match_count_three || 0),
        match_count_four: Number(accountData?.match_count_four || 0),
        match_count_five: Number(accountData?.match_count_five || 0),
        match_count_six: Number(accountData?.match_count_six || 0),
        match_count_seven: Number(accountData?.match_count_seven || 0),
        match_count_eight: Number(accountData?.match_count_eight || 0),
        match_count_nine: Number(accountData?.match_count_nine || 0),
        match_count_ten: Number(accountData?.match_count_ten || 0),
        match_count_eleven: Number(accountData?.match_count_eleven || 0),
      }}
      validationSchema={YupObject({
        name: nameSchema,
        user_name: usernameSchema,
        phone_number: phoneSchema,
        password: passwordSchema,
        max_single_bet: Yup.number().required(),
        max_mix_bet: Yup.number().required(),
        single_bet_commission: Yup.number()
          .required()
          .max(Number(accountData?.single_bet_commission)),
        match_count_two: Yup.number()
          .required()
          .max(Number(accountData?.match_count_two)),
        match_count_three: Yup.number()
          .required()
          .max(Number(accountData?.match_count_three)),
        match_count_four: Yup.number()
          .required()
          .max(Number(accountData?.match_count_four)),
        match_count_five: Yup.number()
          .required()
          .max(Number(accountData?.match_count_five)),
        match_count_six: Yup.number()
          .required()
          .max(Number(accountData?.match_count_six)),
        match_count_seven: Yup.number()
          .required()
          .max(Number(accountData?.match_count_seven)),
        match_count_eight: Yup.number()
          .required()
          .max(Number(accountData?.match_count_eight)),
        match_count_nine: Yup.number()
          .required()
          .max(Number(accountData?.match_count_nine)),
        match_count_ten: Yup.number()
          .required()
          .max(Number(accountData?.match_count_ten)),
        match_count_eleven: Yup.number()
          .required()
          .max(Number(accountData?.match_count_eleven)),
      })}
      onSubmit={(values, { resetForm }) => {
        values["user_name"] =
          accountData?.user_name.substring(3) + values["user_name"];
        values["self_agent_id"] = accountData?.id;
        mutate(values);
        resetForm();
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="">
          <Row>
            <Col sm="12" md="6">
              <label for="user_name" className="fw-bold">
                User Name :
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
                  maxLength={3}
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
              <label for="single_bet_commission" className="fw-bold">
                Single Bet Comission :
              </label>

              <Field
                type="number"
                name="single_bet_commission"
                id="single_bet_commission"
                component={ReactstrapInput}
                required
              />
            </Col>
          </Row>

          <div className="mt-4">
            <SimpleInputField
              nameList={[
                {
                  name: "match_count_two",
                  title: "Match Count 2",
                  require: "true",
                },
                {
                  name: "match_count_three",
                  title: "Match Count 3",
                  require: "true",
                },
                {
                  name: "match_count_four",
                  title: "Match Count 4",
                  require: "true",
                },
                {
                  name: "match_count_five",
                  title: "Match Count 5",
                  require: "true",
                },
                {
                  name: "match_count_six",
                  title: "Match Count 6",
                  require: "true",
                },
                {
                  name: "match_count_seven",
                  title: "Match Count 7",
                  require: "true",
                },
                {
                  name: "match_count_eight",
                  title: "Match Count 8",
                  require: "true",
                },
                {
                  name: "match_count_nine",
                  title: "Match Count 9",
                  require: "true",
                },
                {
                  name: "match_count_ten",
                  title: "Match Count 10",
                  require: "true",
                },
                {
                  name: "match_count_eleven",
                  title: "Match Count 11",
                  require: "true",
                },
              ]}
            />
          </div>

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

export default AgentForm;
