import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

// Routes
app.get("/", () => {
  console.log("this is the home for testing the server ");
});

// listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`doing it without db`);
});
