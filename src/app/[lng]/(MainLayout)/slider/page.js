"use client";

import {
  bannerDeleteAPI,
  bannerListAPI,
  selfData,
} from "@/Utils/AxiosUtils/API";
import SliderTable from "./components/slider-table";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/Components/CommonComponent/Loader";

const SliderListPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["profile"],
    queryFn: () => request({ url: selfData }).then((res) => res?.data),
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  if (isFetching) return <Loader />;

  return (
    <SliderTable
      moduleName="Slider"
      url={bannerListAPI}
      deleteAPI={bannerDeleteAPI}
      filterHeader={{ isCreate: true }}
      authID={data?.data?.id}
    />
  );
};

export default SliderListPage;
