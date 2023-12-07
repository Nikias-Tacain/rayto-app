import React from 'react'
import ItemListContainer from './ProductList/ItemListContainer'
import styles from './Tienda.module.css';
import { Categorias } from './categorias/Categorias';

const Tienda = () => {
  return (
    <section className={styles.tiendaProducts}>
        <Categorias />
        <ItemListContainer />
    </section>
  )
}

export default Tienda