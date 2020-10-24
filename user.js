const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  projects: { type: Schema.Types.ObjectId, ref: 'Projects' }
});


userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

const User = model("User", userSchema, "users");

module.exports = User;
