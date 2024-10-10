import Layout from "@/Layout";
import MaintainModaleDialog from "@/Components/Modal/maintain-modal";

export default function RootLayout({ children, params: { lng } }) {
  return (
    <>
      <MaintainModaleDialog />
      <Layout lng={lng}>{children}</Layout>
    </>
  );
}
