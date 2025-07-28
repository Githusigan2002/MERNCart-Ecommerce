import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



//Connect database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/",authRoutes)

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}/`);
});
