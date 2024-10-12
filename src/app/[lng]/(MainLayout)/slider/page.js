import { bannerDeleteAPI, bannerListAPI } from "@/Utils/AxiosUtils/API";
import SliderTable from "./components/slider-table";

const SliderListPage = () => {
  return (
    <SliderTable
      moduleName="Slider"
      url={bannerListAPI}
      deleteAPI={bannerDeleteAPI}
      filterHeader={{ isCreate: true }}
    />
  );
};

export default SliderListPage;
