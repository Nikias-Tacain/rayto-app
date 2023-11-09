import React from 'react';
import styles from './Header.module.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className={styles.header}>
        <article className={styles.headerLogo}>
          <Link to={`/`}>
            <img src="/images/logoNavBar.png" alt="Logo Tienda" width={40} height={60}/>
          </Link>
        </article>
        <NavBar />
    </header>
  )
}
