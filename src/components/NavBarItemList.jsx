import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarItemList() {
  return (
    <div>
        <ul>
            <li>
                <Link to={"/tienda/category/men's-clothing"}>
                    Ropa de hombre
                </Link>
            </li>
            <li>
                <Link to={"/tienda/category/jewelery"}>
                    Joyeria
                </Link>
            </li>
            <li>
                <Link to={"/tienda/category/electronics"}>
                    Electronica
                </Link>
            </li>
        </ul>
    </div>
  )
}
