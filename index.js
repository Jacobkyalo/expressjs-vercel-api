import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Task from "./models/task.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Expressjs and Vercel API of Tasks",
  });
});

app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({
    status: "success",
    message: "Tasks retrieved successfully",
    results: tasks.length,
    tasks,
  });
});

app.post("/api/tasks", async (req, res) => {
  const { text } = req.body;

  const task = await Task.create({ text });

  res.status(201).json({
    status: "success",
    message: "Created a new task",
    task,
  });
});

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error.message);
  }
};

connectDB()
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

export default app;
