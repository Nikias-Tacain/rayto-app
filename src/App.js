import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tienda" element={<ItemListContainer />}/>
        <Route path="/tienda/category/:id" element={<ItemListContainer />}/>
        <Route path="/tienda/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
