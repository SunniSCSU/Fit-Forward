const express = require("express");
const router = express.Router();
const { Users } = require("../models/");
const bcrpyt = require("bcrypt");

// logic for registration
router.post("/", async (req, res) => {
  const { username, password, gender, birthday, height, weight, targetWeight } =
    req.body;
  bcrpyt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      gender: gender,
      birthday: birthday,
      height: height,
      weight: weight,
      targetWeight: targetWeight,
    });
    res.json("SUCCESS");
  });
});

// logic for login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "User not found" });

  bcrpyt.compare(password, user.password).then((pwMatch) => {
    if (!pwMatch)
      res.json({ error: "Incorrect Username or Password Combination" });
    res.json("Login Successful");
  });
});

module.exports = router;