const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require("./models/User")
const db = require("./db")
const cors = require('cors');
const {jwtAuthMiddleware, generateToken} = require("./jwt.js");
const app = express();
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());


// Registration endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ success: false, message: 'Email already registered' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    const response = await newUser.save();
    const payload = {
      id : response.id
    }
    console.log(JSON.stringify(payload));
    const token = generateToken(payload);  // generate jwt token for the user
    res.status(201).json({ success: true, message: 'User registered successfully' ,token});
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const payload = {
        id: user.id
      };
      const token = generateToken(payload);
      res.status(200).json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.get("/",(req,res) => {
  res.send("Backend Server On port 3005");
})
app.listen(3005, () => {
  console.log('Server is running on port 3005');
});
