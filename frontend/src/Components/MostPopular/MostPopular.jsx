import React from "react";
import "./MostPopular.css";
import Item from "../Item/Item";
import most_popular from "../Assets/most_popular";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const MostPopular = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="most-popular">
      <h1>MOST POPULAR</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
        viewport={{ once: true }}
        className="popular-items"
      >
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
      </motion.div>
    </div>
  );
};

export default MostPopular;
