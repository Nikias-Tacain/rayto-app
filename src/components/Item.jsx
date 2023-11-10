import React from 'react'

const Item = ({name, description, price, image}) => {
  return (
    <div>
        <img src={image} alt={name} />
        <div>
            <h3>{name}</h3>
            <h6>$ {price}</h6>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default Item