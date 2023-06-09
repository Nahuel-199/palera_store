import { useLocation } from "react-router";
import { useState } from "react";
import All from "../../components/products/All";
import "./productList.css";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort,] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };

  return (
    <div className="container__productList">
      <h1 className="title__productList">Nuestros Productos</h1>
      <div className="filterContainer">
        <div className="filters">
          <span className="filter__text">Categorias:</span>
          <select name="color" className="selects" >
            <option disabled selected>Categorias</option>
            <option>papeles</option>
            <option>pegamentos</option>
            <option>cintas</option>
          </select>
        </div>
      </div>
      <All cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
