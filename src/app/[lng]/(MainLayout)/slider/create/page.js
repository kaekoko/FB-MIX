"use client";

import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import { AllTimeZone } from "@/Data/AllTimeZoneData";
import { BET_TYPE_LIST } from "@/Data/TabTitleListData";
import Btn from "@/Elements/Buttons/Btn";
import I18NextContext from "@/Helper/I18NextContext";
import { bannerCreateAPI } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useContext, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "reactstrap";

const SliderCreatePage = () => {
  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const { i18Lang } = useContext(I18NextContext);
  const { mutate, isLoading } = useAgentCreate({
    url: bannerCreateAPI,
    path: `/${i18Lang}/slider`,
  });

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Formik
      initialValues={{ image: null, status: "" }}
      onSubmit={(values) => {
        if (values.image) {
          const formData = new FormData();
          formData.append("image", values.image);
          formData.append("status", values.status);
          mutate(formData);
        }
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form>
          <Card>
            <CardHeader>
              <CardTitle className="fs-4 fw-bold">Create Slider</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="d-md-flex justify-content-between align-items-center">
                <div className="w-50">
                  <div className="">
                    <ul className={`image-select-list`}>
                      <li className="choosefile-input">
                        <input
                          type="file"
                          id="banner"
                          name="image"
                          onChange={(e) => {
                            setFieldValue("image", e.target.files[0]);
                            setFile(e.target.files[0]);
                          }}
                        />
                        <label htmlFor={"banner"}>
                          <RiAddLine />
                        </label>
                      </li>
                    </ul>
                    <p className="help-text">
                      Image (PNG format is standard and width 851px , height
                      273px)
                    </p>
                  </div>
                  <Btn
                    type="submit"
                    title="Upload"
                    className="btn-theme btn-lg mt-4"
                  />
                </div>

                <div className="w-50 mt-2">
                  <Image
                    src={
                      selectedImage ||
                      "https://api.topwin.club/public/images/no-image.png"
                    }
                    alt="banner"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default SliderCreatePage;
