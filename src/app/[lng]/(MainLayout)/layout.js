import RuleModalDialog from "@/Components/Modal/rule-modal";
import Layout from "@/Layout";

export default function RootLayout({ children, params: { lng } }) {
  return (
    <Layout lng={lng}>
      <RuleModalDialog />
      {children}
    </Layout>
  );
}
