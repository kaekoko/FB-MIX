import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowModal from "@/Elements/Alerts&Modals/Modal";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { AgentGeneralAPI } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import {
  nameSchema,
  phoneSchema,
  YupObject,
} from "@/Utils/Validation/ValidationSchemas";
import { useAgentGeneralModal } from "@/Utils/Zustand";
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Col, Container, Row } from "reactstrap";
import * as Yup from "yup";

const AgentGeneralModal = ({ refetch, ...rest }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { open, data, onClose } = useAgentGeneralModal();
  const { mutate: agentGeneralMutate, isLoading } = useAgentCreate({
    url: AgentGeneralAPI,
    onClose,
    refetch,
  });

  console.log(data);

  return (
    <div>
      <ShowModal
        open={open}
        onClose={onClose}
        modalAttr={{
          className: "media-modal modal-dialog modal-dialog-centered modal-lg",
        }}
        close={true}
        title={`General Edit`}
        noClass={true}
      >
        <div>
          <Formik
            initialValues={{
              name: data?.name,
              phone_number: data?.phone_number,
              max_mix_bet: data?.max_mix_bet,
              max_single_bet: data?.max_single_bet,
              single_bet_commission: data?.single_bet_commission,
              feature_max_single_bet: data?.feature_max_single_bet,
              usa_single_bet_commission: data?.usa_single_bet_commission,
              usa_multiple_bet_commission: data?.usa_multiple_bet_commission,
              usa_max_single_bet: data?.usa_max_single_bet,
              usa_max_mix_bet: data?.usa_max_mix_bet,
            }}
            validationSchema={YupObject({
              name: nameSchema,
              phone_number: phoneSchema,
              max_mix_bet: Yup.number().required(),
              max_single_bet: Yup.number().required(),
              single_bet_commission: Yup.number().required(),
              feature_max_single_bet: Yup.number().required(),
              usa_single_bet_commission: Yup.number().required(),
              usa_multiple_bet_commission: Yup.number().required(),
              usa_max_single_bet: Yup.number().required(),
              usa_max_mix_bet: Yup.number().required(),
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
                  <Col sm={12} md={6}>
                    <label for="max_mix_bet">Max Mix Bet :</label>
                    <Field
                      type="number"
                      name="max_mix_bet"
                      id="max_mix_bet"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="max_single_bet">Max Single Bet :</label>
                    <Field
                      type="number"
                      name="max_single_bet"
                      id="max_single_bet"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="single_bet_commission">
                      Single Bet Commission
                    </label>
                    <Field
                      type="number"
                      name="single_bet_commission"
                      id="single_bet_commission"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="feature_max_single_bet">
                      Feature Max Single Bet
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

                <Row className="mt-4">
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="usa_single_bet_commission">
                      Euro Single Bet Commission
                    </label>
                    <Field
                      type="number"
                      name="usa_single_bet_commission"
                      id="usa_single_bet_commission"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="usa_multiple_bet_commission">
                      Euro Multiple Bet Commission
                    </label>
                    <Field
                      type="number"
                      name="usa_multiple_bet_commission"
                      id="usa_multiple_bet_commission"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="usa_max_single_bet">Euro Max Single Bet</label>
                    <Field
                      type="number"
                      name="usa_max_single_bet"
                      id="usa_max_single_bet"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={6} className="mt-2 mt-md-0">
                    <label for="usa_max_mix_bet">Euro Max Mix Bet</label>
                    <Field
                      type="number"
                      name="usa_max_mix_bet"
                      id="usa_max_mix_bet"
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

export default AgentGeneralModal;
