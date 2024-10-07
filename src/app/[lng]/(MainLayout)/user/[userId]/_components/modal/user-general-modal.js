import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowModal from "@/Elements/Alerts&Modals/Modal";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { userGeneralAPI } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import {
  nameSchema,
  phoneSchema,
  YupObject,
} from "@/Utils/Validation/ValidationSchemas";
import { useAgentGeneralModal } from "@/Utils/Zustand";
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Col, Row } from "reactstrap";
import * as Yup from "yup";

const UserGeneralModal = ({ refetch, ...rest }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { open, data, onClose } = useAgentGeneralModal();
  const { mutate: agentGeneralMutate, isLoading } = useAgentCreate({
    url: userGeneralAPI,
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
        title={`General Edit ( ${data?.user_name} )`}
        noClass={true}
      >
        <div>
          <Formik
            initialValues={{
              name: data?.name,
              phone_number: data?.phone_number,
              max_mix_bet: data?.max_mix_bet,
              max_single_bet: data?.max_single_bet,
              feature_max_single_bet: data?.feature_max_single_bet,
            }}
            validationSchema={YupObject({
              name: nameSchema,
              phone_number: phoneSchema,
              max_mix_bet: Yup.number().required(),
              max_single_bet: Yup.number().required(),
              feature_max_single_bet: Yup.number().required(),
            })}
            onSubmit={(values) => {
              values["id"] = data?.id;
              agentGeneralMutate(values);
            }}
          >
            {({ values }) => (
              <Form>
                <Row>
                  <Col sm={12} md={6}>
                    <label for="name">Name :</label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="phone_number">Phone Number :</label>
                    <Field
                      type="tel"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col sm={12} md={4}>
                    <label for="max_mix_bet">Max Mix Bet :</label>
                    <Field
                      type="number"
                      name="max_mix_bet"
                      id="max_mix_bet"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="max_single_bet">Max Single Bet :</label>
                    <Field
                      type="number"
                      name="max_single_bet"
                      id="max_single_bet"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>

                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="feature_max_single_bet">
                      Feature Max Single Bet :
                    </label>
                    <Field
                      type="number"
                      name="feature_max_single_bet"
                      id="feature_max_single_bet"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

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

export default UserGeneralModal;
