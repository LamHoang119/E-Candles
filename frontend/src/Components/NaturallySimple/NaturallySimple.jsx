import React from "react";
import "./NaturallySimple.css";
import naturally_img1 from "../Assets/naturally-1.png";
import naturally_img2 from "../Assets/naturally-2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NaturallySimple = () => {
  const navigate = useNavigate();

  return (
    <div className="naturally-simple">
      <motion.div
        initial={{ marginTop: "-30rem", opacity: 0 }}
        whileInView={{ marginTop: "0", opacity: 1 }}
        transition={{ type: "tween", duration: 0.8 }}
        viewport={{ once: true }}
        className="naturally-content"
      >
        <h1>NATURALLY SIMPLE</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <button onClick={() => navigate("/our-story")}>Our Story</button>
      </motion.div>
      <motion.div
        initial={{ marginTop: "-30rem", opacity: 0 }}
        whileInView={{ marginTop: "0", opacity: 1 }}
        transition={{ type: "tween", duration: 0.8 }}
        viewport={{ once: true }}
        className="naturally-image"
      >
        <img src={naturally_img1} alt="" />
        <img src={naturally_img2} alt="" />
      </motion.div>
    </div>
  );
};

export default NaturallySimple;
