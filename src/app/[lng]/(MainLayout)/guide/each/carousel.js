import Image from "next/image";
import guide1 from "../../../../../../public/assets/images/guide/guide1.jpg";
import guide2 from "../../../../../../public/assets/images/guide/guide2.jpg";
import guide3 from "../../../../../../public/assets/images/guide/guide3.jpg";
import guide4 from "../../../../../../public/assets/images/guide/guide4.jpg";
import guide5 from "../../../../../../public/assets/images/guide/guide5.jpg";

const CarouselEach = () => {
  return (
    <div className="row">
      <div className="col-lg-3 position-relative">
        <div className="col-12">
          <Image width={"100%"} height={500} src={guide1} />
        </div>
        <div className="col-12 fs-6">
          1. Copmany or အထက် Agent နဲ့ စာရင်းရှင်းရန် Dashboard သို သွားပါ။
        </div>
      </div>
      <div className="col-lg-3 position-relative">
        <div className="col-12">
          <Image width={"100%"} height={500} src={guide2} />
        </div>
        <div className="col-12 fs-6">
          2. မိမိရှင်းလိုသော StartDate EndDate ရွေးရန်
        </div>
      </div>
      <div className="col-lg-3 position-relative">
        <div className="col-12">
          <Image width={"100%"} height={500} src={guide3} />
        </div>
        <div className="col-12 fs-6">
          3. Company report မှ Win / loss တွင်ကြည့်ရမည်ဖြစ်ပြီး အနှုတ်ထွက်ပါက
          အထက်သိုပေးရမည်ဖြစ်ပြီး အပေါင်းဖြစ်ပါက အထက်မှ ပြန်လည်ရရှိမည့်
          ပမာဏဖြစ်သည်။
        </div>
      </div>
      <div className="col-lg-3 position-relative">
        <div className="col-12">
          <Image width={"100%"} height={500} src={guide4} />
        </div>
        <div className="col-12 fs-6">
          4. မိမိယူဆာအားလုံး​၏ အရှုးအမြတ်အား Direct user betting report
          တွင်ကြည့်ရန်
        </div>
      </div>
      <div className="col-lg-3 position-relative">
        <div className="col-12">
          <Image width={"100%"} height={500} src={guide5} />
        </div>
        <div className="col-12 fs-6">
          5. မိမိ Agent အားလုံး​၏ အရှုးအမြတ်အား Agent report တွင်ကြည့်ရန်
        </div>
      </div>
    </div>
  );
};

export default CarouselEach;
