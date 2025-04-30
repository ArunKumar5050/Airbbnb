const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const cors = require('cors');

// enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173', // your frontend Vite server
  credentials: true,
}));


const listingRoutes = require('./routes/listingRoutes');
app.use('/api/listings', listingRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const mongoose = require('mongoose');

const Mongo_URL = 'mongodb://127.0.0.1:27017/airbnb';

main()
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });

async function main() {
  await mongoose.connect(Mongo_URL);
}




// Route 1


app.listen(8080,() => {
    console.log('Server is running on port 8080');
})