import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowModal from "@/Elements/Alerts&Modals/Modal";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { AgentCommissionAPI, AgentPasswordAPI } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import {
  passwordConfirmationSchema,
  passwordSchema,
  YupObject,
} from "@/Utils/Validation/ValidationSchemas";
import { useAgentPasswordModal } from "@/Utils/Zustand";
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Col, Row } from "reactstrap";
import * as Yup from "yup";

const AgentPasswordModal = ({ refetch, ...rest }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { open, data, onClose } = useAgentPasswordModal();
  const { mutate: agentGeneralMutate, isLoading } = useAgentCreate({
    url: AgentPasswordAPI,
    onClose,
    refetch,
  });

  return (
    <div>
      <ShowModal
        open={open}
        onClose={onClose}
        modalAttr={{
          className: "media-modal modal-dialog modal-dialog-centered modal-lg",
        }}
        close={true}
        title={`Agent Password`}
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
              values["id"] = data?.id;
              agentGeneralMutate(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div className="">
                  <label for="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter ..."
                    component={ReactstrapInput}
                  />
                </div>

                <div className="mt-3">
                  <label for="confirm_password">Password Confirmation</label>
                  <Field
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Enter ..."
                    component={ReactstrapInput}
                  />
                </div>

                <Btn
                  className="btn btn-theme ms-auto mt-4"
                  type="submit"
                  title="Save"
                  loading={isLoading}
                />
              </Form>
            )}
          </Formik>
        </div>
      </ShowModal>
    </div>
  );
};

export default AgentPasswordModal;
