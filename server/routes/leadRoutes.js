import express from "express";
import { createLead } from "../controllers/leadController.js";
import Lead from "../models/Lead.js";
import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

/* ================= CREATE LEAD ================= */
router.post("/create", createLead);

/* ================= GET ALL LEADS ================= */
router.get("/", protectAdmin, async (req, res) => {

  try {

    const leads = await Lead.find()
      .sort({ createdAt: -1 });

    res.json(leads);

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});

/* ================= UPDATE LEAD STATUS ================= */
router.put("/:id/status", protectAdmin, async (req, res) => {

  try {

    const { status } = req.body;

    // validate status
    if (!["New", "Contacted", "Closed"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value"
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedLead) {
      return res.status(404).json({
        message: "Lead not found"
      });
    }

    res.json(updatedLead);

  } catch (err) {

    res.status(500).json({
      message: "Status Update Failed"
    });

  }

});

/* ================= DELETE LEAD ================= */
router.delete("/:id", protectAdmin, async (req, res) => {

  try {

    const deleted = await Lead.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Lead not found"
      });
    }

    res.json({
      success: true,
      message: "Lead Deleted Successfully"
    });

  } catch (err) {

    res.status(500).json({
      message: "Delete Failed"
    });

  }

});

export default router;