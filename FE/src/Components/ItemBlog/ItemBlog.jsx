import React from "react";
import './ItemBlog.css'
import admin_icon from "../Assets/admin-icon.png";
import check_icon from "../Assets/check-icon.png";
import more_icon from "../Assets/more-icon.png";
import heart_icon from "../Assets/heart-regular.png";

const ItemBlog = (props) => {
  return (
    <div className="blog-card">
      <img className="main-img" src={props.image} alt="" />
      <div className="admin">
        <div className="admin-card">
          <img src={admin_icon} alt="" />
          <div className="admin-inf">
            <span>Admin</span>
            <span>May, 31, 2023</span>
          </div>
        </div>
        <img src={more_icon} alt="" />
      </div>
      <div className="desc">
        <p>{props.h1}</p>
        <p>{props.des}</p>
      </div>
      <div className="bottom">
        <div className="view">
          <p>0 view</p>
          <p>0 comments</p>
        </div>
        <div className="heart">
          <p>1</p>
          <img src={heart_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItemBlog;
