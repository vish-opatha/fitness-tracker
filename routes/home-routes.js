const router = require("express").Router();
const path = require("path");

router.use("/exercise", (req, res) => {
  console.log("before exercise");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
  console.log("after exercise");
});

router.use("/stats", (req, res) => {
  console.log("before stats");
  res.sendFile(path.join(__dirname, "../public/stats.html"));
  console.log("after stats");
});

module.exports = router;
