import React, { useState } from "react";
import "../CSS/Login.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import facebook_icon from "../Components/Assets/facebook-f.png";
import pinterest_icon from "../Components/Assets/pinterest-p.png";
import instagram_icon from "../Components/Assets/instagram.png";
import banner_img from "../Components/Assets/our-story-1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = () => {
    if (username === "" || password === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return false;
    }
    return true;
  };

  const handleLogin = async (event) => {

    if (!isFormValid()) {
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log("Response status:", response.status);
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        alert("Đăng nhập thành công!");
        navigate("/");
      } else {
        alert(data.message || "Đăng nhập thất bại, vui lòng kiểm tra lại!");
      }
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-page" onSubmit={handleLogin}>
        <div className="logo-l">
          <img src={banner_img} alt="Banner" />
        </div>
        <div className="login-r">
          <p>Hello,</p>
          <p>Welcome!</p>
          <div className="input">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
