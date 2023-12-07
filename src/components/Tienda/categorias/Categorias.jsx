import React from 'react'
import styles from './categorias.module.css';
import { Link } from 'react-router-dom';
export const Categorias = () => {
  return (
    <div className={styles.menuCategorias}>
        <Link to={'/tienda/televisores'}>
            <div>
                <img src="/images/tvs.webp" alt="" />
                <p>Smart TVs</p>
            </div>
        </Link>
        <Link to={'/tienda/celulares'}>
            <div>
                <img src="/images/celulares.webp" alt="" />
                <p>Celulares</p>
            </div>
        </Link>
        <Link to={'/tienda/climatizacion'}>
            <div>
                <img src="/images/climatizacion.webp" alt="" />
                <p>Climatizacion</p>
            </div>
        </Link>
        <Link to={'/tienda/heladeras'}>
            <div>
                <img src="/images/heladeras.webp" alt="" />
                <p>Heladeras</p>
            </div>
        </Link>

    </div>
  )
}
