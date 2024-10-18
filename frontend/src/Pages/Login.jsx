import React from "react";
import "../CSS/Login.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import facebook_icon from "../Components/Assets/facebook-f.png";
import pinterest_icon from "../Components/Assets/pinterest-p.png";
import instagram_icon from "../Components/Assets/instagram.png";
import banner_img from "../Components/Assets/our-story-1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-page">
        <div className="logo-l">
          <img src={banner_img} alt="Banner" />
        </div>
        <div className="login-r">
          <p>Hello,</p>
          <p>Welcome!</p>
          <div className="input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="default" />}
            label="Remember me"
            labelPlacement="end"
          />
          <div className="login-signup">
            <button type="submit">Submit</button>{" "}
            {/* Nút Submit sẽ gọi hàm handleLogin */}
            <button type="button" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
          <div className="follow">
            <span>Follow me on: </span>
            <img src={facebook_icon} alt="Facebook" />
            <img src={pinterest_icon} alt="Pinterest" />
            <img src={instagram_icon} alt="Instagram" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
