const router = require("express").Router();

router.post("/user/login", (req, res) => {
  const obj = req.body;
  console.log(obj);
});

module.exports = router;
