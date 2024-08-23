import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowModal from "@/Elements/Alerts&Modals/Modal";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { AgentCommissionAPI } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import { YupObject } from "@/Utils/Validation/ValidationSchemas";
import { useAgentCommissionModal } from "@/Utils/Zustand";
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Col, Row } from "reactstrap";
import * as Yup from "yup";

const AgentCommissionModal = ({ refetch, ...rest }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { open, data, onClose } = useAgentCommissionModal();
  const { mutate: agentCommissionMutate, isLoading } = useAgentCreate({
    url: AgentCommissionAPI,
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
        title={`Match Count Edit`}
        noClass={true}
      >
        <div>
          <Formik
            initialValues={{
              match_count_two: data?.match_count_two,
              match_count_three: data?.match_count_three,
              match_count_four: data?.match_count_four,
              match_count_five: data?.match_count_five,
              match_count_six: data?.match_count_six,
              match_count_seven: data?.match_count_seven,
              match_count_eight: data?.match_count_eight,
              match_count_nine: data?.match_count_nine,
              match_count_ten: data?.match_count_ten,
              match_count_eleven: data?.match_count_eleven,
            }}
            validationSchema={YupObject({
              match_count_two: Yup.number().required(),
              match_count_three: Yup.number().required(),
              match_count_four: Yup.number().required(),
              match_count_five: Yup.number().required(),
              match_count_six: Yup.number().required(),
              match_count_seven: Yup.number().required(),
              match_count_eight: Yup.number().required(),
              match_count_nine: Yup.number().required(),
              match_count_ten: Yup.number().required(),
              match_count_eleven: Yup.number().required(),
            })}
            onSubmit={(values) => {
              values["id"] = data?.id;
              agentCommissionMutate(values);
            }}
          >
            {({ values }) => (
              <Form>
                <Row className="mt-4">
                  <Col sm={12} md={4}>
                    <label for="match_count_two">Match Count 2 :</label>
                    <Field
                      type="number"
                      name="match_count_two"
                      id="match_count_two"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="match_count_three">Match Count 3 :</label>
                    <Field
                      type="number"
                      name="match_count_three"
                      id="match_count_three"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="match_count_four">Match Count 4 :</label>
                    <Field
                      type="number"
                      name="match_count_four"
                      id="match_count_four"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col sm={12} md={4}>
                    <label for="match_count_five">Match Count 5 :</label>
                    <Field
                      type="number"
                      name="match_count_five"
                      id="match_count_five"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="match_count_six">Match Count 6 :</label>
                    <Field
                      type="number"
                      name="match_count_six"
                      id="match_count_six"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="match_count_seven">Match Count 7 :</label>
                    <Field
                      type="number"
                      name="match_count_seven"
                      id="match_count_seven"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col sm={12} md={4}>
                    <label for="match_count_eight">Match Count 8 :</label>
                    <Field
                      type="number"
                      name="match_count_eight"
                      id="match_count_eight"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="match_count_nine">Match Count 9 :</label>
                    <Field
                      type="number"
                      name="match_count_nine"
                      id="match_count_nine"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                  <Col sm={12} md={4} className="mt-2 mt-md-0">
                    <label for="match_count_ten">Match Count 10 :</label>
                    <Field
                      type="number"
                      name="match_count_ten"
                      id="match_count_ten"
                      placeholder="Enter ..."
                      component={ReactstrapInput}
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col sm={12} md={4}>
                    <label for="match_count_eleven">Match Count 11 :</label>
                    <Field
                      type="number"
                      name="match_count_eleven"
                      id="match_count_eleven"
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

export default AgentCommissionModal;
