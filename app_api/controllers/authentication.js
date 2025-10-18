const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');

const login = (req, res) => {
    // Validate message to ensure that email and password are present.
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }

    // Delegate authentication to passport module
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            // Error in Authentication Process
            return res
                .status(404)
                .json(err);
        }

        if (user) {
            // Auth succeeded - generate JWT and return to caller
            const token = user.generateJWT();
            res
                .status(200)
                .json({ token });
        } else {
            // Auth failed - return error
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};

// 
const register = async (req, res) => {
    console.log("BODY:", req.body);
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });

    user.setPassword(req.body.password); // Make sure this method exists in your model

    const savedUser = await user.save();

    const token = savedUser.generateJWT();
    return res.status(200).json({ token });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ error: "Registration failed", details: err.message });
  }
};



module.exports = {
    register,
    login
};
