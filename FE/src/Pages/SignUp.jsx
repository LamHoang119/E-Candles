import React, { useState } from "react";
import "../CSS/SignUp.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import facebook_icon from "../Components/Assets/facebook-f.png";
import pinterest_icon from "../Components/Assets/pinterest-p.png";
import instagram_icon from "../Components/Assets/instagram.png";
import banner_img from '../Components/Assets/our-story-3.png';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault(); // Ngăn chặn reload trang
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert('Đăng ký thành công!');
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', username);
                }
                navigate('/login');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Có lỗi xảy ra. Vui lòng thử lại!');
            console.error(error);
        }
    };
    

    return (
        <div className="signup-container">
            <form className="signup-page" onSubmit={handleSignUp}>
                <div className="logo-l">
                    <img src={banner_img} alt="" />
                </div>
                <div className="signup-r">
                    <p>Sign Up,</p>
                    <p>For Free!</p>
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
                    <div className="input">
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox defaultChecked color="default" />}
                        label="Remember me"
                        labelPlacement="end"
                    />
                    <div className="signup-signup">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => navigate('/login')}>Login</button>
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
