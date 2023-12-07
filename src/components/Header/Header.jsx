import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
export default function Header() {
  return (
    <header className={styles.header}>
        <div>
            <Link to={'/'}>
                <img src="/images/hypeMarket.png" alt="logo" width={200} height={200}/>
            </Link>
        </div>
        <div className={styles.navBar}>
            <ul>
                <Link to={'/'}>
                    <li>Inicio</li>
                </Link>
                <Link to={'/tienda'}>
                    <li>Productos</li>
                </Link>
                <Link to={'#footer'}>
                    <li>Contacto</li>
                </Link>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </header>
  )
}
