import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

import request from "@/Utils/AxiosUtils";
import SuccessHandle from "@/Utils/CustomFunctions/SuccessHandle";

const useAgentBlock = (url, path, message, extraFunction) => {
  const router = useRouter();
  const pathname = usePathname();
  return useMutation((data) => request({ url, data, method: "post" }), {
    onSuccess: (resData) => {
      SuccessHandle(resData, router, path, message, pathname);
      extraFunction && extraFunction();
    },
  });
};
export default useAgentBlock;
