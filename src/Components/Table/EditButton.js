import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import { Field, Form, Formik } from "formik";
import { Col, Row } from "reactstrap";
import { ReactstrapInput } from "../ReactstrapFormik";
import {
  passwordConfirmationSchema,
  passwordSchema,
  YupObject,
} from "@/Utils/Validation/ValidationSchemas";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import { staffEditAPI } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";

const EditButton = ({ tableData, refetch }) => {
  const [modal, setModal] = useState(false);

  const { mutate: staffEditMutate, isLoading } = useUpdate(
    staffEditAPI,
    tableData.id
  );

  return (
    <>
      {tableData?.id && (
        <a>
          <RiEdit2Line
            className="text-info"
            onClick={() => {
              setModal(true);
            }}
          />
        </a>
      )}
      <ShowModal
        open={modal}
        onClose={setModal}
        modalAttr={{
          className: "media-modal modal-dialog modal-dialog-centered modal-lg",
        }}
        close={true}
        title={`Change password : ${tableData?.user_name}`}
        noClass={true}
      >
        <div>
          <Formik
            initialValues={{
              password: "",
              confirm_password: "",
            }}
            validationSchema={YupObject({
              password: passwordSchema,
              confirm_password: passwordConfirmationSchema,
            })}
            onSubmit={(values) => {
              staffEditMutate(values, {
                onSuccess: () => {
                  setModal(false);
                  refetch();
                },
              });
            }}
          >
            {({ values }) => (
              <Form>
                <Row>
                  <Col sm={12} md={6}>
                    <label for="password">Password :</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="confirm_password">Confirm Password :</label>
                    <Field
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

                <Btn
                  className="btn btn-theme ms-auto mt-4"
                  type="submit"
                  title="Save"
                  isLoading={isLoading}
                />
              </Form>
            )}
          </Formik>
        </div>
      </ShowModal>
    </>
  );
};

export default EditButton;
