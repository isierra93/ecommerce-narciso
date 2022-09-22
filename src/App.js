import {Routes, Route} from "react-router-dom";

import CartProvider from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "../src/components/Footer"
import Cart from "./components/Cart";


function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="BIENVENIDOS!" />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer greeting="Filtrando por categoria" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
