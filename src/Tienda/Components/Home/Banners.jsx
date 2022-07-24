import Carousel from 'react-bootstrap/Carousel';
export const Banners = () => {
  return (
    <Carousel className="carrouselPrin">
      <Carousel.Item>
        <img
          className="d-block w-100 carrouselPrin"
          src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-180722-slider-03-01.jpg"
          alt="First slide"          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrouselPrin"
          src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-190722-sliders-04-01.jpg"
          alt="Second slide"          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrouselPrin"
          src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-180722-slider-01-01.jpg"
          alt="Third slide"          
        />
      </Carousel.Item>
    </Carousel>
  );
};