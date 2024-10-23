"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordionEach from "./each/accordion";

const AccordionWithSlideshow = () => {
  const [activeKey, setActiveKey] = useState("0");
  const handleAccordion = (key) => setActiveKey(key === activeKey ? "" : key);

  return (
    <div className="col-12">
      <Accordion activeKey={activeKey}>
        <AccordionEach eventKey="0" onClick={handleAccordion} />
        {/* <AccordionEach eventKey="1" onClick={handleAccordion} /> */}
      </Accordion>
    </div>
  );
};

export default AccordionWithSlideshow;
