import React from 'react';
import styles from './ItemDetail.module.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  return (
    <div className={styles.container}>
        <div className={styles.containerLinks}>
            <Link to={'/tienda'}>
                <span>Tienda</span>
            </Link>
            <p>-</p>
            <Link to={`/tienda/${item.categoria}`}>
                <span> {item.categoria}</span>
            </Link>
            <p>-</p>
            <Link>
                <span> {item.nombre}</span>
            </Link>
        </div>
        <div className={styles.productoDetalle}>
            <img src={item.imagen} alt={item.nombre} className={styles.imagen} />
            <div className={styles.detalleContenido}>
                <h3 className={styles.titulo}>{item.nombre}</h3>
                <p className={styles.precio}>${item.precio}</p>
            </div>
        </div>
    </div>
  );
};

export default ItemDetail;
