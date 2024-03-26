const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createUser", async (req, res) => {
  try {
    await User.create({
      name: "Ahsan Bilal",
      password: "123456",
      email: "ahsan.bilal@gmail.com",
      location: "locationn",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;