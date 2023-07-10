const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Incorrect password");
    }
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(500).json(error);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24hr" });
}

module.exports = {
  create,
  login,
};
