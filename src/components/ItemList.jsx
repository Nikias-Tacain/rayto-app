import React from 'react'
import { useEffect, useState} from 'react'
import Item from './Item';
import styles from './ItemList.module.css';  
import ItemDetail from './ItemDetail';
const ItemList = () => {
    const [ items, setItems ] = useState([]);
    const [itemSelectedId, setItemSelectedId] = useState(null);
    const [itemSelected, setItemSelected] = useState(null);

    const fetchProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((json)=>setItems(json))
        .catch((err)=>console.log(err));
    };

    const fetchProduct = () =>{
        fetch(`https://fakestoreapi.com/products/${itemSelectedId}`)
        .then((res)=>res.json())
        .then((producto)=>setItemSelected(producto))
        .catch((err)=>console.log(err));
    };
    useEffect(()=>{
        fetchProduct()
    },[itemSelectedId]);

    useEffect(() =>{
        fetchProducts()
    },[])
  return (
    <div className={styles.cards}>
        {itemSelectedId && (
            <div>
                <ItemDetail itemSelected={itemSelected}/>
            </div>
        )}
        {items.map((item)=>{
            return (
                <div key={item.id} onClick={()=> setItemSelectedId(item.id)}>
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default ItemList