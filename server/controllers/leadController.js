import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {

    console.log("Incoming Data:", req.body);

    const lead = await Lead.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lead Saved Successfully",
      lead,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};