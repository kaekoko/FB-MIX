"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordionEach from "./each/accordion";
import { CarouselData } from "./constant/car-data";

const AccordionWithSlideshow = () => {
  const [activeKey, setActiveKey] = useState("0");
  const handleAccordion = (key) => setActiveKey(key === activeKey ? "" : key);

  return (
    <div className="col-12">
      <Accordion>
        {CarouselData.map((dta, idx) => (
          <AccordionEach
            key={idx}
            data={dta}
            eventKey={idx.toString()}
            onClick={handleAccordion}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionWithSlideshow;
