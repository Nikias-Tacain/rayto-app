import ItemListContainar from "./components/ItemListContainar";
import NavBar from "./components/NavBar";
import PortadaHome from "./components/PortadaHome";

function App() {
  return (
    <>
      <NavBar />
      <PortadaHome />
      <ItemListContainar greeting={'Buenas tardes'}/>
    </>
  );
}

export default App;
