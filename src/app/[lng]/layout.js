import "../../../public/assets/scss/app.scss";
import I18NextProvider from "@/Helper/I18NextContext/I18NextProvider";
import TanstackWrapper from "@/Layout/TanstackWrapper";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";

export async function generateMetadata() {
  return {
    metadataBase: new URL(process.env.API_PROD_URL),
    title: "Mega Sports 777",
    description: "Mega Sports 777",
    icons: {
      icon: "https://staging.topwin.club/public/images/logo/favicon.png",
      link: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Public+Sans&display=swap",
      },
    },
  };
}

export default function RootLayout({ children, params: { lng } }) {
  const auth = cookies().get("uat"); // Retrieve auth cookie

  return (
    <html lang={lng}>
      <body suppressHydrationWarning={true}>
        <I18NextProvider>
          <TanstackWrapper>
            {children}
            <ToastContainer />
          </TanstackWrapper>
        </I18NextProvider>
      </body>
    </html>
  );
}
