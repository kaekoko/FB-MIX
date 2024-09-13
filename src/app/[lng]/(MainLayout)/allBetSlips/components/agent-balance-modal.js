import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowModal from "@/Elements/Alerts&Modals/Modal";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { AgentBalanceAPI } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import { YupObject } from "@/Utils/Validation/ValidationSchemas";
import { useAgentBalanceModal } from "@/Utils/Zustand";
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";

const BalanceModal = ({ refetch, url, isAgent, ...rest }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { open, data, onClose } = useAgentBalanceModal();
  const { mutate: BalanceMutate, isLoading } = useAgentCreate({
    url,
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
        title={`Manage Balance for ${data?.name}`}
        noClass={true}
      >
        <div>
          <Formik
            initialValues={{
              transaction_type: "deposit",
              amount: "",
            }}
            validationSchema={YupObject({
              amount: Yup.number().required(),
            })}
            onSubmit={(values) => {
              isAgent
                ? (values["agent_id"] = data?.id)
                : (values["id"] = data?.id);
              BalanceMutate(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div
                  className="d-flex gap-4 mt-3 mb-4 ms-1 align-items-center"
                  role="group"
                  aria-labelledby="manage_balance"
                >
                  <label role="button" className="fw-bold fs-6">
                    <Field
                      type="radio"
                      name="transaction_type"
                      value="deposit"
                      style={{ transform: "scale(2)", marginRight: "1rem" }}
                    />
                    Deposit
                  </label>
                  <label role="button" className="fw-bold">
                    <Field
                      type="radio"
                      name="transaction_type"
                      value="withdraw"
                      style={{ transform: "scale(2)", marginRight: "1rem" }}
                    />
                    Withdraw
                  </label>
                </div>

                <div className="mt-3">
                  <label>
                    Current balance :{" "}
                    {Intl.NumberFormat("en-US", {
                      currency: "MMK",
                      style: "currency",
                    }).format(Number(data?.balance) ?? 0)}
                  </label>
                  <Field
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Enter amount"
                    component={ReactstrapInput}
                  />
                </div>

                <Btn
                  className="btn btn-theme ms-auto mt-4"
                  type="submit"
                  title="Save"
                  disabled={isLoading || !open}
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

export default BalanceModal;
