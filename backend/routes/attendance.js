const router = require("express").Router();
const Attendance = require("../models/Attendance");

router.post("/", async (req, res) => {
  const att = await Attendance.create(req.body);
  res.json(att);
});

router.get("/", async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});

module.exports = router;
