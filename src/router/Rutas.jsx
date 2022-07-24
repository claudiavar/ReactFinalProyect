import { Routes, Route } from "react-router-dom";
import { NavBar } from "../Tienda/Components/Header/NavBar";
import { FormLogin } from "../Tienda/Components/Login/Lopgin/FormLogin";
import { FromRegistrol } from "../Tienda/Components/Login/Register/FormRegistrol";
import Product from "../Tienda/Components/Products/ProductsDetail";
import { Categoryproducts } from "../Tienda/Pages/Categoryproducts";
import { Home } from "../Tienda/Pages/Home";
import { Loegado } from "../Tienda/Pages/Logeado";
import Footer from "../Tienda/Components/Footer/Footer"

export const Rutas = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="Product" element={<Product/>} />
        <Route path="Category" element={<Categoryproducts/>} />
        <Route path="Logeado" element={<Loegado/>}/>
        <Route path="Login" element={<FormLogin/>} />
        <Route path="Register" element={<FromRegistrol/>}/>        
      </Routes>
      <Footer/>
    </>
  );
};
