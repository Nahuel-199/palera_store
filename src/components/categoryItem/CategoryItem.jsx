import React from 'react'
import { Link } from "react-router-dom";
import "./categoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className='container__category'>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="img" className="work__img" />
      </Link>
      <span className="text_novedades">{item.title}</span>
    </div>
  )
}

export default CategoryItem