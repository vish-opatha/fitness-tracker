const router = require("express").Router();
const { workout } = require("../models");

router.get("/", (req, res) => {
  try {
    res.send("exercise.html");
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
