import React from "react";
import "./Footer.css";
import facebook_icon from '../Assets/facebook-f.png'
import instagram_icon from '../Assets/instagram.png'
import pinterest_icon from '../Assets/pinterest-p.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-f">
        <p>H-CANDLES</p>
      </div>
      <div className="right-f">
        <ul>SHOP
            <li><a href="">CANDLES</a></li>
            <li><a href="">SOAPS</a></li>
            <li><a href="">SALE</a></li>
            <li><a href="">GIFT CARD</a></li>
        </ul>
        <ul>H-CANDLES
            <li><a href="">OUR STORY</a></li>
            <li><a href="">CONTACT US</a></li>
            <li><a href="">FAQ</a></li>
        </ul>
        <ul>HELP
            <li><a href="">TERMS & CONDITIONS</a></li>
            <li><a href="">PRIVACY POLICY </a></li>
            <li><a href="">SHIPPING & RETURNS</a></li>
        </ul>
        <ul>CONTACT US
            <li><a href="">123-456-7890 </a></li>
            <li><a href="">INFO@MYSITE.COM</a></li>
        </ul>
        <ul>
            <li><a href=""><img src={facebook_icon} alt="" /></a></li>
            <li><a href=""><img src={instagram_icon} alt="" /></a></li>
            <li><a href=""><img src={pinterest_icon} alt="" /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
