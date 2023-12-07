import Item from "./Item";
import styles from './Item.module.css'

const ItemList = ( {productos} ) => {

  return (
    <div>
        <div className={styles.card}>
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList