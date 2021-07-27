require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// mongoose connection
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(
  DATABASE_URL,
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
// middlewares
app.use(express.json());

// routers
const loginRouter = require("./routes/login");

// routes
app.use("/", loginRouter);

// port configuration
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server Started"));
