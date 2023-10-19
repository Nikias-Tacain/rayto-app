import React from 'react'
import styles from './Header.module.css';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className={styles.navegacion}>
        <ul className={styles.navBar}>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#sobreNosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/tienda">Tienda</a>
            </li>
        </ul>
        <CartWidget />
    </nav>
  )
}
