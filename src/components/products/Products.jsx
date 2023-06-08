import { popularProducts } from "./data";
import Product from "../product/Product";
import "./products.css"


const Products = () => {
  return (
    <div className="container_products">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;