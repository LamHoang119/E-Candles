const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Kết nối MongoDB thành công'))
.catch(err => {
    console.error('Lỗi kết nối MongoDB:', err);
    process.exit(1);
});

// Sử dụng các route
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Cấu hình cổng
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});

