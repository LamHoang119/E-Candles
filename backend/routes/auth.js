const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Đăng ký người dùng mới
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Không mã hóa mật khẩu
        const newUser = new User({
            username,
            password,  // Lưu mật khẩu dưới dạng thuần văn bản
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// router.post('/signup', async (req, res) => {
//     const { username, password } = req.body;

//     console.log('Received signup request:', req.body);

//     try {
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             console.log('User already exists:', username);
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 12);
//         console.log('Password hashed successfully');

//         const newUser = new User({
//             username,
//             password: hashedPassword,
//         });

//         await newUser.save();
//         console.log('User saved to database:', newUser);

//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error('Lỗi khi đăng ký:', error);
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// });

// // Đăng nhập người dùng
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // So sánh trực tiếp mật khẩu
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const trimmedUsername = username.trim();
//     console.log('Received login request:', req.body);

//     try {
//         const user = await User.findOne({ username: trimmedUsername });
//         if (!user) {
//             console.log('User not found:', username);
//             return res.status(400).json({ message: 'User not found' });
//         }        

//         const isPasswordCorrect = await bcrypt.compare(password, user.password);
//         console.log('Password correct:', isPasswordCorrect);

//         if (!isPasswordCorrect) {
//             console.log('Invalid password for user:', username);
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });
//         console.log('Login successful for user:', username);
//         res.status(200).json({ token, message: 'Login successful' });
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// });

module.exports = router;
