const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const getUser = (req, res) => {
  res.json({ message: "user route" });
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashedPassword });

  res.status(200).json(user);
};

module.exports = {
  getUser,
  createUser,
};
