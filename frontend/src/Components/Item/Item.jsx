import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Item.css";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const username = localStorage.getItem("username");
    
    if (username) {
      addToCart(props.id);
    } else {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
      navigate("/login");
    }
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p className="sale">{props.sale}</p>
      <p className="name">{props.name}</p>
      <div className="price">
        <p className={props.new_price ? "old-price" : ""}>${props.old_price}</p>
        {props.new_price && <p>${props.new_price}</p>}
      </div>
      <button className="add" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Item;
