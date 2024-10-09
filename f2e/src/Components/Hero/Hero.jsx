import React from "react";
import "./Hero.css";
import img_hero_1 from "../Assets/hero-img-1.jpg";
import img_hero_2 from "../Assets/hero-img-2.jpg";
import img_hero_3 from "../Assets/hero-img-3.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <motion.div
        initial={{ marginTop: "-30rem", opacity: 0 }}
        whileInView={{ marginTop: "0", opacity: 1 }}
        transition={{ type: "tween", duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-form-1"
      >
        <img src={img_hero_1} alt="" />
        <div className="description">
          <h1>HANDCRAFTED ORGANIC SOAPS & CANDLES</h1>
          <p>JUST LIKE NATURE INTENDED</p>
          <button onClick={() => navigate("/category")}>Shop Now</button>
        </div>
      </motion.div>
      <p className="shop-our">SHOP OUR FAVORITES</p>
      <div className="hero-form-2">
        <motion.img
          initial={{ marginLeft: "-30rem", opacity: 0 }}
          whileInView={{ marginLeft: "0", opacity: 1 }}
          transition={{ type: "tween", duration: 0.8 }}
          viewport={{ once: true }}
          src={img_hero_2}
          alt=""
        />
        <div className="description">
          <h1>NATURE’S ESSENCE SCENTED CANDLES</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button onClick={() => navigate("/category")}>Shop Candles</button>
        </div>
      </div>
      <div className="hero-form-3">
        <motion.div
          initial={{ marginLeft: "-30rem", opacity: 0 }}
          whileInView={{ marginLeft: "0", opacity: 1 }}
          transition={{ type: "tween", duration: 0.8 }}
          viewport={{ once: true }}
          className="img-from-3"
        >
          <img src={img_hero_3} alt="" />
          <div></div>
        </motion.div>
        <div className="description">
          <h1>PROBIOTIC CLEANSING BARS</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button onClick={() => navigate("/category")}>Shop Soap</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
