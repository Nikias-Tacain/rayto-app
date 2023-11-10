import React from 'react'
import { useEffect, useState} from 'react'
import Item from './Item';
const ItemList = () => {
    const [ productList, setProductList ] = useState([]);
    const [productSelectedId, setProductSelectedId] = useState(0);
    const fetchProducts = () =>{
        setTimeout(()=>{
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
        }, 2000)

    }

    const getProduct = () =>{
        fetch(`https://654c2d0d77200d6ba8589671.mockapi.io/products/${productSelectedId}`)
            .then((resp) =>resp.json())
            .then((detail) =>{
                console.log(detail);
            })
            .catch(() =>{

            })
    }

    useEffect(() =>{
        fetchProducts()
    },[])
  return (
    productList.length === 0 ?
    <h2> Cargando...</h2> : 
    <div>
        {productList.map(({ name, description, price, image, id }, index) =>(
            <div key={index} onClick={() => {setProductSelectedId(id); getProduct();}} >
                <Item 
                    name={name}
                    description={description}
                    price={price}
                    image={`${image}?id=${index}`}
                />
            </div>
        ))}
    </div>
  )
}

export default ItemList