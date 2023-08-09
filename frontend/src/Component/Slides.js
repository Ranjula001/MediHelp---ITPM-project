import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dhis2.org/wp-content/uploads/Sri-Lanka-Covax-vaccine-dashboard.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:1153/1*V9EWu9UuHCNW4abwunpJ7A.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://journals.plos.org/plosntds/article/figure/image?size=medium&id=10.1371/journal.pntd.0009346.g007"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;