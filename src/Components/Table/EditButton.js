import * as Yup from "yup";
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
import { bannerEditAPI, staffEditAPI } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import Image from "next/image";

const EditButton = ({ type, tableData, refetch }) => {
  const [modal, setModal] = useState(false);

  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const { mutate: bannerEditMutate, isLoading: banner_load } = useUpdate(
    bannerEditAPI,
    tableData.id
  );

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

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
          className: `media-modal modal-dialog modal-dialog-centered ${
            type == "staff_edit" ? "modal-lg" : "modal-md"
          }`,
        }}
        close={true}
        title={
          type == "staff_edit"
            ? `Change password : ${tableData?.user_name}`
            : "Edit Slider"
        }
        noClass={true}
      >
        <div>
          {type == "staff_edit" ? (
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
          ) : (
            <Formik
              initialValues={{
                image: null,
                status: tableData.statusValue ? 1 : 0 || "",
              }}
              validationSchema={YupObject({
                image: Yup.mixed().required("File is required"),
                status: Yup.string().required(),
              })}
              onSubmit={(values) => {
                if (values.image) {
                  const formData = new FormData();
                  formData.append("image", values.image);
                  formData.append("status", values.status);
                  bannerEditMutate(formData, {
                    onSuccess: () => {
                      refetch();
                      setModal(false);
                    },
                  });
                }
              }}
            >
              {({ values, errors, touched, setFieldValue }) => (
                <Form>
                  <>
                    <label className="small text-muted">
                      Image (PNG format is standard)
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        setFieldValue("image", e.target.files[0]);
                      }}
                    />
                    <span className="small mt-2 text-danger">
                      {errors["image"]}
                    </span>
                    <div
                      style={{ width: "100%", height: "200px" }}
                      className="w-full position-relative mt-3"
                    >
                      <Image
                        alt="banner"
                        src={
                          selectedImage ||
                          `https://staging.topwin.club/public/storage/${tableData.image}`
                        }
                        fill
                        priority
                      />
                    </div>
                    <div className="mt-3">
                      <select
                        className="form-select"
                        name="status"
                        onChange={(e) =>
                          setFieldValue("status", e.target.value)
                        }
                      >
                        <option selected={values.status == 1} value="1">
                          Active
                        </option>
                        <option selected={values.status == 0} value="0">
                          Inactive
                        </option>
                      </select>
                    </div>
                  </>

                  <Btn
                    className="btn btn-theme mt-3 ms-auto"
                    type="submit"
                    title="Save"
                    loading={banner_load}
                  />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </ShowModal>
    </>
  );
};

export default EditButton;
