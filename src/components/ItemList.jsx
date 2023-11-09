import React from 'react'
import { useEffect, useState} from 'react'
import Item from './Item';
const ItemList = () => {
    const [ productList, setProductList ] = useState([]);
    const fetchProducts = () =>{
        fetch('https://654c2d0d77200d6ba8589671.mockapi.io/products', {
            method: 'GET'
        })
        .then((resp) => {
            return resp.json()
        }).then((data) => {
            setProductList(data)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const getProduct = (event) =>{
        console.log(event.target);
        fetch('https://654c2d0d77200d6ba8589671.mockapi.io/products', {})
    }

    useEffect(() =>{
        fetchProducts()
    },[])
  return (
    <div>
        {productList.map(({ name, description, price, image, id }, index) =>(
            <div key={index} onClick={getProduct} idProduct={id}>
                <Item 
                    name={name}
                    description={description}
                    price={price}
                    image={image}
                />
            </div>
        ))}
    </div>
  )
}

export default ItemList