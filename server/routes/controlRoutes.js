import express from "express";
import { createContact, getContacts } 
from "../controllers/contactController.js";

const router = express.Router();

// CREATE CONTACT
router.post("/", createContact);

// GET CONTACTS
router.get("/", getContacts);

export default router;