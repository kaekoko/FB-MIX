import MessageCreate from "./MessageCreate";
import { ToastNotification } from "./ToastNotification";

const SuccessHandle = (resData, router, path, message, pathname) => {
  if (resData.status === 200 || resData.status === 201) {
    ToastNotification(
      "success",
      resData.data.success || resData.data?.message || message
    );
    path &&
      router &&
      router.push(
        path ? path : pathname.slice(0, pathname.slice(1).indexOf("/") + 1)
      );
  } else if (resData.response?.data?.errors) {
    if (typeof resData.response.data.errors === "string") {
      ToastNotification(
        "error",
        resData.response.data.errors || resData.response.data.message
      );
    } else {
      Object.keys(resData.response.data.errors).map((error) => {
        ToastNotification("error", resData.response.data.errors[error][0]);
      });
    }
  } else {
    ToastNotification(
      "error",
      resData.response?.data?.error || resData?.response?.data?.message
    );
  }
};

export default SuccessHandle;
