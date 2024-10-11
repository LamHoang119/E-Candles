import React, { useContext } from "react";
import "../CSS/ProductCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { useState } from "react";
import menu_down from "../Components/Assets/caret-down-solid.png";

const ProductCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [filter, setFilter] = useState(null);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const filteredProducts = filter
    ? all_product.filter((item) => item.category.includes(filter))
    : all_product;

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu=() =>{
    mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }
  return (
    <div className="product-category">
      <div className="sort">
        <p>Sort by</p>
        <img src={menu_down} alt="" onClick={toggleMenu}/>
      </div>
      <div className="left-pr">
        <h1>Browse by</h1>
        <hr />
        <ul className={mobileMenu ? "show-mobile-menu":"hide-mobile-menu"}>
          <li onClick={() => handleFilterClick("all_product")}>
            <a href="#">ALL PRODUCT</a>
          </li>
          <li onClick={() => handleFilterClick("candles")}>
            <a href="#">CANDLES</a>
          </li>
          <li onClick={() => handleFilterClick("most-popular")}>
            <a href="#">MOST POPULAR</a>
          </li>
          <li onClick={() => handleFilterClick("sale")}>
            <a href="#">SALE</a>
          </li>
          <li onClick={() => handleFilterClick("soap")}>
            <a href="#">SOAPS</a>
          </li>
        </ul>
      </div>
      <div className="right-p">
        {filter === "all_product" && (
          <div className="browse">
            <h1>All Products</h1>
            <p>18 products</p>
          </div>
        )}
        {filter === "candles" && (
          <div className="browse">
            <h1>Candles</h1>
            <p>9 products</p>
          </div>
        )}
        {filter === "most-popular" && (
          <div className="browse">
            <h1>Most Popular</h1>
            <p>8 products</p>
          </div>
        )}
        {filter === "sale" && (
          <div className="browse">
            <h1>Sale</h1>
            <p>9 products</p>
          </div>
        )}
        {filter === "soap" && (
          <div className="browse">
            <h1>Soaps</h1>
            <p>9 products</p>
          </div>
        )}

        <div className="items">
          {filteredProducts.map((item) => {
            if (item.category.includes(props.category)) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  sale={item.sale}
                  name={item.name}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
