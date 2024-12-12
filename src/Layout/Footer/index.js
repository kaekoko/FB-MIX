import React, { useContext } from "react";
import { Col, Container, Row } from "reactstrap";
import SettingContext from "../../Helper/SettingContext";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import teleImage from "../../../public/assets/images/telegram-icon.png";
import Image from "next/image";

const Footer = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const { state } = useContext(SettingContext);
  return (
    <Container fluid={true}>
      <footer className="footer">
        <Row>
          <Col
            md="12"
            className="footer-copyright d-flex align-items-center gap-3 justify-content-center"
          >
            <a href="https://t.me/megasports777support">
              <Image alt="tele-icon" src={teleImage} width={40} height={40} />
            </a>
            <p className="mb-0">© Mega Sports 777. All right reserved.</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Footer;
