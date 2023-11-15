import React from 'react'

const Item = ({title, description, price, image}) => {
  return (
    <div>
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