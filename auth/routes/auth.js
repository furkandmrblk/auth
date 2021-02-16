const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

// Register
router.post('/register', async (req, res) => {
  // Validate the Data before we make a User
  const { error } = registerValidation({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  if (error) return res.status(400).json({ message: error.details[0].message });

  // Checking if the user is already in the database
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).json({ message: 'E-Mail already in use.' });

  // Hash the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  // Validate the Data before User can sign in
  const { error } = loginValidation({
    email: req.body.email,
    password: req.body.password,
  });
  if (error) return res.status(400).json({ message: error.details[0].message });

  // Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: 'E-Mail does not exist' });
  // Checking if the password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: 'Invalid password' });

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).json({ token: token });
});

module.exports = router;
