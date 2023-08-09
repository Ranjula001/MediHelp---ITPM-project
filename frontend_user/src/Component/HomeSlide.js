import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ss.kln.ac.lk/depts/lisc/images/News/3/61.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>MediHelp</h3>
          <p>Recovery From the Lack Of Medicine</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ceylincolife.com/wp-content/uploads/2023/05/Ceylinco-life-csr-best-life-insurance-sri-lanka.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>MediHelp</h3>
          <p>Recovery From the Lack Of Medicine</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mri.gov.lk/wp-content/uploads/2020/05/1-1024x608.gif"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>MediHelp</h3>
          <p>
          Recovery From the Lack Of Medicine
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}