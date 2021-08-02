require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// MONGOOSE CONFIGURATION
const DB_URL = process.env.DB_URL;
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongoose Connected");
  }
);
// ROUTERS

// ROUTES

// PORT CONFIGURATION
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Started"));
