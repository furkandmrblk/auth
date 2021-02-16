const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors());

dotenv.config();

// Import Routes
const authRoute = require('./routes/auth');

// Connecting to Database
mongoose.connect(
  process.env.MONGO_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log('Connected to DB')
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/user', authRoute);

const port = 3001;
app.listen(port, () => console.log('Server is running on port: ' + `${port}`));
