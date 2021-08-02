require("dotenv").config();
const router = require("express").Router();
const UserModel = require("../models/UserModel");
const { loginValidation } = require("./validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
  // login validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if email exists and assigning that user ibj to user variable
  const user = await UserModel.findOne({ email: req.body.email });

  // Checking if email not exists
  if (!user) return res.status(400).send("Email is not found");

  //   Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Password");

  //   Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  //   assigning token to header
  res.header("auth-token", token).send(token);

  res.render("/dashboard");
});

module.exports = router;
