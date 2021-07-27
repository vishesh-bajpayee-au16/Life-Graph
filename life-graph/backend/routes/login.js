const router = require("express").Router();

router.get("/user/login", (req, res) => {
  const obj = req.body;
  console.log(obj);
});

module.exports = router;
