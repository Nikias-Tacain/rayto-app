import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({producto}) => {
  return (
    <div className={styles.container}>
        <Link to={`/tienda/item/${producto.id}`} className={styles.link}>
            <img src={producto.imagen} alt={producto.nombre} className={styles.image}/>
        </Link>
        <Link to={`/tienda/item/${producto.id}`}>
            <div>
                <h4 className={styles.title}>{producto.nombre}</h4>
                <p className={styles.price}>$ {producto.precio}</p>
            </div>
        </Link>
    </div>
  )
}

export default Item;