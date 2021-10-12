const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Add schema for workouts
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, required: "The type of the exercise is required." },
      name: { type: String, required: "The name is required." },
      weight: { type: Number, required: "Enter the weight." },
      sets: { type: Number, required: "Enter the sets." },
      reps: { type: Number },
      duration: { type: Number },
      distance: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
