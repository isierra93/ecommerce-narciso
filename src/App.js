import {Routes, Route} from "react-router-dom";

import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import ItemListContainer from "./components/Container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="BIENVENIDOS!" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer greeting="Filtrando por categoria" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
