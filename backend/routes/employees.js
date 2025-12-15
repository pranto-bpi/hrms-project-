const router = require("express").Router();
const Employee = require("../models/Employee");

router.post("/", async (req, res) => {
  const emp = await Employee.create(req.body);
  res.json(emp);
});

router.get("/", async (req, res) => {
  const emps = await Employee.find();
  res.json(emps);
});

router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
