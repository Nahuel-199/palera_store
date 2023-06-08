import { BsSearch } from 'react-icons/bs';
import "./product.css";

  
  const Product = ({ item }) => {
    return (
      <div className="container_product">
        <div className="circle"></div>
        <img src={item.images} alt="" className="image_product" />
        <div className="info">
          <div className="icons">
            <BsSearch />
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;