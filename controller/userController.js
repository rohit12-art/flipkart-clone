const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const userRegister = async (req, res) => {
  const { firstname, lastname, username, email, password, phone } = req.body;

  if (!firstname || !lastname || !username || !email || !password || !phone) {
    return res.status(422).send("Please fill the form properly.");
  }

  try {
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(422).send("User already exist");
    }

    const hashedPssword = await bcrypt.hash(password, 12);
    const user = new User({
      firstname,
      lastname,
      username,
      password: hashedPssword,
      email,
      phone,
    });
    await user.save();
    return res.status(201).send("User registration succesfully ");
  } catch (error) {
    return res.status(200).send("Unexpected Error .Please try again later");
  }
};

const userLogin = async (req, res) => {
    const {username,password} = req.body
    try {

        const existingUser = await User.findOne({ username: username });
        if (!existingUser) {
            return res.status(400).json("No user found.");
          }
          const isMatch = await bcrypt.compare(password, existingUser.password);
          if (!isMatch) {
            res.status(400).json("Invalid credentials");
          }
          return res.status(200).json({ data: existingUser })
    } catch (error) {
        res.status(400).json("Bad Request. Try again later");
    }
    
};


module.exports = {
  userRegister,
  userLogin
};
