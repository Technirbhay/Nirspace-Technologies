import express from "express";
import { chatWithAI } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", chatWithAI);

router.post("/chat",(req,res)=>{
 console.log("AI ROUTE HIT");
 res.send("working");
});

export default router;