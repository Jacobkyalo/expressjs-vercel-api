import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please provide a task"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
