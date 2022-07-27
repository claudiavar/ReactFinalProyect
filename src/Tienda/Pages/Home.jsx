import { Banners } from "../Components/Home/Banners";
import Container from "react-bootstrap/Container";
import { CategoriasVen } from "../Components//Home/CategoriasVen";
import { CarrouselCategori } from "../Components/Home/CarrouselCategori";
import { Banners2 } from "../Components/Home/Banners2";
import { Banners3 } from "../Components/Home/Banners3";
import { OficialTiendas } from "../Components/Home/OficialTiendas";






export const Home = () => {
  return (
    <Container fluid className='padding-margin'>
      <Banners/>
      <CategoriasVen/>
      <CarrouselCategori/>
      <Banners3/>            
      <OficialTiendas/>
    </Container>
  );
};
