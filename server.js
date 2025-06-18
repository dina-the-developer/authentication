const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

// Connecting db
const connectDB = require("./config/db");
const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

// Routes
app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
