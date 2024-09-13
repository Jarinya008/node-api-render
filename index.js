const express = require('express');
const path = require('path');

const app = express();

// ตั้งค่า views directory
app.set('views', path.join(__dirname, 'views'));

// ตั้งค่าการใช้ EJS
app.set('view engine', 'ejs');

// Route ตัวอย่าง
app.get('/', (req, res) => {
  res.send('home'); // ตรวจสอบว่า 'home.ejs' อยู่ในไดเรกทอรี 'views'
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
