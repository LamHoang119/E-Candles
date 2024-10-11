import React from "react";
import "./HBlog.css";
import blog_img1 from "../Assets/blog-img1.png";
import blog_img2 from "../Assets/blog-img2.png";
import blog_img3 from "../Assets/blog-img3.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog">
      <h1>THE H-CANDLES BLOG</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
        viewport={{ once: true }}
        className="candles-blog-items"
      >
        <div className="blog-item">
          <img src={blog_img1} alt="" />
          <h2>Re-Using Candles</h2>
          <p>
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
        </div>
        <div className="blog-item">
          <img src={blog_img2} alt="" />
          <h2>How to Pick the Right Scent</h2>
          <p>
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your
          </p>
        </div>
        <div className="blog-item">
          <img src={blog_img3} alt="" />
          <h2>5 Ways to Take Care of Your Candles</h2>
          <p>
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
        </div>
      </motion.div>
      <button onClick={() => navigate("/blog")}>Learn More</button>
    </div>
  );
};

export default Blog;
