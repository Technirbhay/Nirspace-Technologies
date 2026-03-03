import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"; 

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes); // ✅ NOW WORKS

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});