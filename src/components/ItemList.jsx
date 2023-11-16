import React from 'react'
import { useEffect, useState} from 'react'
import Item from './Item';
import styles from './ItemList.module.css';  
import { Link } from 'react-router-dom';
const ItemList = () => {
    const [ items, setItems ] = useState([]);

    const fetchProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((json)=>setItems(json))
        .catch((err)=>console.log(err));
    };


    useEffect(() =>{
        fetchProducts()
    },[])
  return (
    <div className={styles.cards}>
        {items.map((item)=>{
            return (
                <div className={styles.tiendaProduct}>
                    <Link to={'/tienda/item/' + item.id} key={item.id}>
                        <Item
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default ItemList