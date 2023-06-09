import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom"; 
import "./product.css";

  
  const Product = ({ item }) => {
    return (
      <div className="container_product">
        <div className="circle"></div>
        <img src={item.img} alt="" className="image_product" />
        <div className="info">
          <div className="icons">
          <Link to={`/product/${item._id}`}>
            <BsSearch />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;