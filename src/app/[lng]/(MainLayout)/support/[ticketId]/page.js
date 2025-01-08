"use client";

import Loader from "@/Components/CommonComponent/Loader";
import request from "@/Utils/AxiosUtils";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useTransition } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Card, CardBody, CardHeader } from "reactstrap";

const MessageOfEachTicket = ({ params }) => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, startTransition] = useTransition();

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["getComment"],
    queryFn: async () => {
      const response = await request({
        url: `/agentcomment/reply/${params.ticketId}`,
      });
      return response?.data;
    },
  });

  useEffect(() => {
    if (data?.ticket_object?.multi_image) {
      try {
        setImages(JSON.parse(data.ticket_object.multi_image));
      } catch (err) {
        console.error("Invalid JSON format for multi_image");
      }
    }
  }, [data]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSubmit = async () => {
    if (!message.trim()) return;
    startTransition(async () => {
      try {
        const response = await request({
          url: `/agentcomment/store/${params.ticketId}`,
          method: "POST",
          data: { comment: message },
        });
        if (response.status === 200) {
          refetch();
          setMessage("");
        } else {
          console.error("Failed to post comment");
        }
      } catch (err) {
        console.error(err.message || "Error fetching in support comments");
      }
    });
  };

  if (isFetching && !data) return <Loader />;

  return (
    <div
      className="w-100"
      style={{ position: "relative", overflow: "hidden", height: "100vh" }}
    >
      <div className="d-flex bg-white py-5 gap-5 justify-content-center">
        <div className="col-md-8 text-start">
          <Card className="p-0">
            <CardHeader className="fw-bold fs-5 p-0">
              #{params.ticketId}
            </CardHeader>
            <CardBody>{data?.ticket_object?.subject}</CardBody>
          </Card>
        </div>
        <div className="col-md-3 carousel slide">
          <div className="carousel-inner">
            {images?.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img
                  src={`https://staging.topwin.club/public/storage/${image}`}
                  className="d-block w-100"
                  style={{ height: "200px" }}
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
            aria-label="Next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-md-column gap-3 p-3">
            <textarea
              value={message}
              rows={1}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter your message"
            />
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="btn btn-warning btn-lg col-2 col-md-12"
            >
              <FaTelegramPlane size={30} className="mx-auto" />
            </button>
          </div>
        </div>

        <div
          className="col-12 mt-2 pt-1 bg-white overflow-auto pb-3"
          style={{
            maxHeight: "600px",
          }}
        >
          {data?.ticket_data?.length ? (
            data.ticket_data.map((cmt) => (
              <div
                key={cmt.id}
                className={`${
                  cmt.type == 1
                    ? "bg-primary text-white ms-auto w-50 rounded-start"
                    : "bg-dark text-white w-50 rounded-end"
                } text-sm p-4 break-words my-2`}
              >
                {cmt.comment}
              </div>
            ))
          ) : (
            <div className="text-black text-center mt-5">Empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageOfEachTicket;
