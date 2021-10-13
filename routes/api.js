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
    .then((data) => {
      res.json(data.slice(data.length - 7));
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Post route for /api/workouts
router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
