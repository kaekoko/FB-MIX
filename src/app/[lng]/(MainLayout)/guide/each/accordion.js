import { Carousel, Accordion } from "react-bootstrap";
import CarouselEach from "./carousel";

const AccordionEach = ({ eventKey, onClick }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header onClick={() => onClick("0")}>
        အထက် Agent ဖြင့် စာရင်းရှင်းနည်းကြည့်ရန်
      </Accordion.Header>
      <Accordion.Body>
        <CarouselEach />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionEach;
