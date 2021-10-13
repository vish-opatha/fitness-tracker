const router = require("express").Router();
const Workout = require("../models/workout.js");

// Get route for /api/workouts
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
    {
      $sort: { day: 1 },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout.slice(dbWorkout.length - 7));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
