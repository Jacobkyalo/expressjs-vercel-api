import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/tasks", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Expressjs and Vercel API of Tasks",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
