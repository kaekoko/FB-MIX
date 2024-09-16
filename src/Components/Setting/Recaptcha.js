import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onVerify }) => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleRecaptcha = (value) => {
    setCaptchaValue(value);
    onVerify(value);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={handleRecaptcha}
      />
    </div>
  );
};

export default ReCaptcha;
