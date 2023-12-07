import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header/Header.jsx";
import ItemDetailContainer from "./components/Tienda/ProductList/ItemDetailContainer.jsx";
import Tienda from "./components/Tienda/Tienda.jsx";
import { CarritoProvider } from "./components/Tienda/CarritoContext/CarritoContext.js";
import { SearchProvider } from "./components/Tienda/SearchContext/SearchContext.js";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <SearchProvider>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/tienda" element={<Tienda />}/>
              <Route path="/tienda/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/tienda/:categoria" element={<Tienda />} />
            </Routes>
        </SearchProvider>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
