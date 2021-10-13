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

// Update route for a given workout
router.put("/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        exercises: [
          {
            type: req.body.type,
            name: req.body.name,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps,
            duration: req.body.duration,
            distance: req.body.distance,
          },
        ],
      },
    },
    {
      new: true,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
