import React from "react";
import "../CSS/Blog.css";
import ItemBlog from "../Components/ItemBlog/ItemBlog";
import blog_data from "../Components/Assets/blog_data";

const Blog = () => {
  return (
    <div className="blog">
      <div className="des">
        <h1>BLOG</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
      <div className="blog-items">
        {blog_data.map((item, i) => {
          return (
            <ItemBlog
              key={i}
              id={item.id}
              image={item.image}
              h1={item.h1}
              des={item.des}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
