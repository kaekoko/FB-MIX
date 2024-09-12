import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import request from "../../AxiosUtils";
import {
  emailSchema,
  passwordSchema,
  YupObject,
  recaptchaSchema,
} from "../../Validation/ValidationSchemas";
import { login } from "../../AxiosUtils/API";

export const LogInSchema = YupObject({
  email: emailSchema,
  password: passwordSchema,
  recaptcha: recaptchaSchema,
});

const LoginHandle = (responseData, router, setShowBoxMessage, setCookie) => {
  if (responseData.status === 200) {
    setCookie("uat", responseData.data?.data.access_token, {
      path: "/",
      expires: new Date(Date.now() + 24 * 60 * 6000),
    });
    if (typeof window !== "undefined") {
      setCookie("account", JSON.stringify(responseData.data?.data));
      localStorage.setItem("account", JSON.stringify(responseData.data?.data));
      localStorage.setItem("role", "agent");
    }
    router.push("/en/dashboard");
    localStorage.setItem("rule_toggle", true);
  } else {
    setShowBoxMessage(responseData.response.data?.data.error);
  }
};

const useHandleLogin = (setShowBoxMessage) => {
  const [cookies, setCookie] = useCookies(["ue", "uat", "account"]);
  const router = useRouter();
  return useMutation(
    (data) =>
      request({
        url: login,
        method: "post",
        data,
      }),
    {
      onSuccess: (responseData) =>
        LoginHandle(responseData, router, setShowBoxMessage, setCookie),
    }
  );
};

export default useHandleLogin;
