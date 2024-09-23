"use client";

import { ThemeOptions } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";

const ThemeOption = () => {
  const { mutate, isLoading } = useCreate(ThemeOptions, false, "/theme_option");
  return <></>;
};

export default ThemeOption;
