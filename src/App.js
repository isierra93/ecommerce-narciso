import { Routes, Route } from "react-router-dom";

import CartProvider from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "../src/components/Footer"
import Cart from "./components/Cart";
import Form from "./components/Form";
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import Delivery from "./components/Delivery";
import Contact from "./components/Contact";
import BotonWhatsapp from "./components/BotonWhatsapp";


function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Narciso Store!" />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer greeting="Filtrando por categoria" />} />
          <Route path="envios" element={<Delivery />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </CartProvider>
      <BotonWhatsapp />
      <Footer />
    </div>
  );
}

export default App;
