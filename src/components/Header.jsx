import React from 'react';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
        <article className={styles.headerLogo}>
          <img src="/images/logoNavBar.png" alt="Logo Tienda" width={40} height={60}/>
        </article>
    </header>
  )
}
