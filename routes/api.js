const router = require("express").Router();
const Workout = require("../models/workout.js");

// router.get("/workouts", (req, res));

router.post("/workouts", (req, res) => {
  // console.log(JSON.stringify(req.body));
  Workout.create({})
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

module.exports = router;
