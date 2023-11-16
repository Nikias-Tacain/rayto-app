import React from 'react'
import styles from './ItemList.module.css';

const Item = ({title, description, price, image}) => {
  return (
    <div className={styles.product}>
        <img src={image} alt={title} />
        <div>
            <h3>{title}</h3>
            <h6>$ {price}</h6>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default Item