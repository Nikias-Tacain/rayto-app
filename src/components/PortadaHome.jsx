import React from 'react';
import moment from 'moment';
import styles from './PortadaHome.module.css';

export default function PortadaHome() {
    const fechaActual = moment();
    const dia = fechaActual.format('D');
    const mes = fechaActual.format('M')
    const año = fechaActual.format('Y')
    const hora = fechaActual.format('HH');
    const minutos = fechaActual.format('mm');
  return (
    <section className={styles.portadaHome}>
        <div>
            <h1>FLASH APP</h1>
            <h3>Tu pedido de confianza</h3>
        </div>
        <section className={styles.mobileHome}>
            <div className={styles.mobileHomeNavBar}>
                <span>{dia}/{mes}/{año}</span>
                <span>{hora}:{minutos}</span>
            </div>
        </section>
    </section>
  )
}
