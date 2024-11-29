"use client";

import Layout from "@/Layout";
import MaintainModaleDialog from "@/Components/Modal/maintain-modal";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function RootLayout({ children, params: { lng } }) {
  useEffect(() => {
    // Check for the authentication cookie (e.g., "uat")
    const auth = Cookies.get("uat");

    if (auth) {
      // If authenticated, load the Tawk.to script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/674961372480f5b4f5a58c13/1idra7h4r";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Cleanup on unmount
      };
    }
  }, []); // Runs once on mount

  return (
    <>
      <MaintainModaleDialog />
      <Layout lng={lng}>{children}</Layout>
    </>
  );
}
