import React from "react";
import "../CSS/SignUp.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import facebook_icon from "../Components/Assets/facebook-f.png";
import pinterest_icon from "../Components/Assets/pinterest-p.png";
import instagram_icon from "../Components/Assets/instagram.png";
import banner_img from "../Components/Assets/our-story-3.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <form className="signup-page">
        <div className="logo-l">
          <img src={banner_img} alt="" />
        </div>
        <div className="signup-r">
          <p>Sign Up,</p>
          <p>For Free!</p>
          <div className="input">
            <input type="text" placeholder="Username"/>
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="default" />}
            label="Remember me"
            labelPlacement="end"
          />
          <div className="signup-signup">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
          <div className="follow">
            <span>Follow me on: </span>
            <img src={facebook_icon} alt="" />
            <img src={pinterest_icon} alt="" />
            <img src={instagram_icon} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
