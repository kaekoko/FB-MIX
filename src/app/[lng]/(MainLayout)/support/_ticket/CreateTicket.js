import { Col } from "reactstrap";
import I18NextContext from "@/Helper/I18NextContext";
import { createAgentTicket } from "@/Utils/AxiosUtils/API";
import { useAgentCreate } from "@/Utils/Hooks/Agent/usecreate-agent";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const CreateTicket = () => {
  const { i18Lang } = useContext(I18NextContext);
  const [values, setValues] = useState({
    subject: "",
    images: [],
  });

  const { mutate, isLoading } = useAgentCreate({
    url: createAgentTicket,
    path: `/${i18Lang}/support`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subject", values.subject);
    values.images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    mutate(formData, {
      onSuccess: () => {
        toast.success("Message sent successfully");
        setValues({ subject: "", images: [] });

        // Clear file input manually
        document.getElementById("file-input").value = "";
      },
    });
  };

  return (
    <Col sm={12} className="bg-white rounded-3 p-3 p-md-5">
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div>
          <div className="fw-bold fs-5 pb-2">Subject</div>
          <textarea
            rows={5}
            required
            placeholder="Enter your message!"
            value={values.subject} // Controlled input
            onChange={(e) => setValues({ ...values, subject: e.target.value })}
            className="form-control form-control-lg"
          />
        </div>
        <div className="mt-3">
          <div className="fw-bold fs-5 pt-3 pb-2">Attachment</div>
          <input
            id="file-input" // Add an ID for clearing the input
            multiple
            type="file"
            accept="image/jpeg, image/png, image/jpg, image/gif, image/webp"
            className="form-control form-control-lg"
            onChange={(e) => {
              setValues({
                ...values,
                images: Array.from(e.target.files || []), // Convert FileList to array
              });
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-lg btn-primary mt-5 w-100"
        >
          Submit
        </button>
      </form>
    </Col>
  );
};

export default CreateTicket;
