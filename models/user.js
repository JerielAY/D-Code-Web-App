// user.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/26/20
// License: GPL 3.0
// Instantiates and maintains user information with the MongoDB database.

const { Timestamp } = require("mongodb");
const { Schema, model } = require("mongoose");

// Schema for information relating to each user.
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required:true,
  },
  email: {
    type: String,
    unique: true,
  },
  projects: { 
    type: Schema.Types.Array, ref: 'Projects',
  },
  timestamps: true,
});

// Get user information from the login.
userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

// Instantiate user information.
const User = model("User", userSchema);

module.exports = User;
