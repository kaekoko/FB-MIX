import request from "@/Utils/AxiosUtils";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useAgentCreate = ({
  url,
  method = "post",
  path,
  onClose,
  refetch,
}) => {
  const router = useRouter();

  return useMutation((data) => request({ url, data, method, router }), {
    onSuccess: (resData) => {
      console.log(resData);

      if (resData.status === 200 || resData.status === 201) {
        ToastNotification(
          "success",
          resData.data.success ||
            resData.data.message ||
            "Agent created successfully."
        );
        refetch && refetch();
        onClose && onClose();
        path && router.push(path);
      } else if (resData.response?.data?.errors) {
        if (typeof resData.response.data.errors === "string") {
          ToastNotification("error", resData.response.data.errors);
        } else {
          Object.keys(resData.response.data.errors).map((error) => {
            ToastNotification("error", resData.response.data.errors[error][0]);
          });
        }
      } else {
        ToastNotification("error", resData.response?.data?.error);
      }
    },
    onError: (err) => {
      console.error("[AGENT_ERR]: " + err);
      return err;
    },
  });
};
