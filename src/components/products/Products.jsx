import { useEffect, useState } from "react";
/* import { popularProducts } from "./data"; */
import Product from "../product/Product";
import axios from "axios";
import "./products.css"


const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://back-papelera.onrender.com/api/products?category=${cat}`
            : "https://back-papelera.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <section className="container_products section">
      {cat
            ? filteredProducts.map((item, index) => (
                <Product item={item} key={item.id} />
              ))
            : products
                .slice(0, 8)
                .map((item) => <Product item={item} key={item.id} />)}
    </section>
  );
};

export default Products;