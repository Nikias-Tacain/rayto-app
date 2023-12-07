import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSearch } from "../SearchContext/SearchContext";
import styles from './Item.module.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { searchTerm,handleSearch } = useSearch();
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  // Filtrar productos según el término de búsqueda
  const filteredProducts = productos.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <div className={styles.divBusqueda}>
            <Link to={'/tienda'}>
                <input type="text" placeholder="🔍 Buscar productos"  className={styles.inputSearch} value={searchTerm} onChange={(e) => handleSearch(e.target.value)} />
            </Link>
        </div>
        <ItemList productos={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
