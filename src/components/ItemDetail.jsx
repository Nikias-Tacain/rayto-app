import React from 'react'

const ItemDetail = ({itemSelected}) => {
  return (
    <div>
        <h6>{itemSelected?.title}</h6>
        <img src={itemSelected?.image} alt={itemSelected?.title} width={150} />
        <div>
            <p>{itemSelected?.description}</p>
        </div>
        <p>$ {itemSelected?.price}</p>
    </div>
  )
}

export default ItemDetail