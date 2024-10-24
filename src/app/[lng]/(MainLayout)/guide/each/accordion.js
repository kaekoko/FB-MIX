import { Carousel, Accordion } from "react-bootstrap";
import CarouselEach from "./carousel";

const AccordionEach = ({ eventKey, onClick, data }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header onClick={() => onClick(data.id.toString())}>
        {data.title}
      </Accordion.Header>
      <Accordion.Body>
        <CarouselEach item={data.image} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionEach;
