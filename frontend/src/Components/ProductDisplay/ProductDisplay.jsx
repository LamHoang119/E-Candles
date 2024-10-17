import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import Item from "../Item/Item";
import most_popular from "../Assets/most_popular";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const username = localStorage.getItem("username");
    
    if (username) {
      addToCart(product.id);
    } else {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
      navigate("/login");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const { product } = props;

  const toggleProductInfo = () => {
    setShowProductInfo(!showProductInfo);
  };

  const toggleReturnPolicy = () => {
    setShowReturnPolicy(!showReturnPolicy);
  };

  const toggleShippingInfo = () => {
    setShowShippingInfo(!showShippingInfo);
  };

  return (
    <div className="products-displays">
      <div className="product-display">
        <div className="left-p">
          <img src={product.image} alt="" />
          <p>
            I'm a product description. This is a great place to "sell" your
            product and grab buyers' attention. Describe your product clearly
            and concisely. Use unique keywords. Write your own description
            instead of using manufacturers' copy.
          </p>
        </div>
        <div className="right-pr">
          <h1>{product.name}</h1>
          <span>{`SKU:000${product.id}`}</span>
          <div className="price">
            <p className={product.new_price ? "old-price" : ""}>
              ${product.old_price}
            </p>
            {product.new_price && <p>${product.new_price}</p>}
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="buy-now">Buy Now</button>
          <div className="product-des">
            <div>
              <p>PRODUCT INFO</p>
              <button onClick={toggleProductInfo}>+</button>
            </div>
            <p id="desc" className={showProductInfo ? "show-desc" : "hidden-desc"}>
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
              Buyers like to know what they’re getting before they purchase, so
              give them as much information as possible so they can buy with
              confidence and certainty.
            </p>
          </div>
          <div className="product-des">
            <div>
              <p>RETURN & REFUND POLICY</p>
              <button onClick={toggleReturnPolicy}>+</button>
            </div>
            <p id="desc" className={showReturnPolicy ? "show-desc" : "hidden-desc"}>
              I’m a Return and Refund policy. I’m a great place to let your
              customers know what to do in case they are dissatisfied with their
              purchase. Having a straightforward refund or exchange policy is a
              great way to build trust and reassure your customers that they can
              buy with confidence.
            </p>
          </div>
          <div className="product-des">
            <div>
              <p>SHIPPING INFO</p>
              <button onClick={toggleShippingInfo}>+</button>
            </div>
            <p id="desc" className={showShippingInfo ? "show-desc" : "hidden-desc"}>
              I'm a shipping policy. I'm a great place to add more information
              about your shipping methods, packaging and cost. Providing
              straightforward information about your shipping policy is a great
              way to build trust and reassure your customers that they can buy
              from you with confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="popular-items">
        <h2>You Might Also Like</h2>
        <Slider {...settings}>
          {most_popular.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                sale={item.sale}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDisplay;
