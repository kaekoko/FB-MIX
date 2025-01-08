"use client";

import request from "@/Utils/AxiosUtils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAgentTicket } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import { dateFormate } from "@/Utils/CustomFunctions/DateFormate";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GetTicket = () => {
  const router = useRouter();
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["getTicket"],
    queryFn: async () => {
      const response = await request({ url: getAgentTicket });
      return response?.data;
    },
  });

  const closeTicketMutation = useMutation({
    mutationFn: async (id) =>
      request({ url: `agentcomment/ticket/close/${id}` }),
    onError: (error) => console.error("Failed to close ticket:", error.message),
    onSuccess: () => refetch(),
  });

  const handleCloseTicket = (id) => closeTicketMutation.mutate(id);

  if (isFetching) return <Loader />;

  return (
    <div className="w-100 overflow-auto">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Subject</th>
            <th>Image</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.supports?.map((msg) => {
            const images = msg.multi_image ? JSON.parse(msg.multi_image) : [];
            return (
              <tr key={msg.id}>
                <td className="fw-bold">{msg.ticket}</td>
                <td>
                  {msg.subject.length > 20
                    ? `${msg.subject.substring(0, 20)}...`
                    : msg.subject}
                </td>
                <td>
                  {images.length > 0 ? (
                    <a
                      href={`https://staging.topwin.club/public/storage/${images[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        alt="Ticket Image"
                        src={`https://staging.topwin.club/public/storage/${images[0]}`}
                        width={80}
                        height={80}
                      />
                    </a>
                  ) : (
                    <div className="ms-3">-</div>
                  )}
                </td>
                <td>{dateFormate(msg.created_at)}</td>
                <td>
                  <span
                    className={`badge ${
                      msg.status === 1
                        ? "text-bg-warning"
                        : msg.status === 2
                        ? "text-bg-success"
                        : msg.status === 3
                        ? "text-bg-primary"
                        : "text-bg-danger"
                    }`}
                  >
                    {msg.status === 1
                      ? "Opened"
                      : msg.status === 2
                      ? "Answered"
                      : msg.status === 3
                      ? "User Reply"
                      : "Closed"}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm bg-danger w-100"
                    onClick={() => handleCloseTicket(msg.ticket)}
                    disabled={
                      closeTicketMutation.isFetching || msg.status === 9
                    }
                  >
                    Close Ticket
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push(`/support/${msg.ticket}`)}
                    disabled={
                      closeTicketMutation.isFetching || msg.status === 9
                    }
                    className="btn btn-sm bg-primary w-100 mt-2"
                  >
                    View Ticket
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GetTicket;
