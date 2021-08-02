const router = require("express").Router();
const { signupValidation } = require("./validation");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  //   check if there are errors in validation
  const { error } = signupValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //   check if user is already present in database
  const emailExists = await UserModel.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already Exists");

  //   hashed password
  const salt = bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //     create a user
  const user = await new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
