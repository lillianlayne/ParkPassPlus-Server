const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  ticketType: String,
  park: String,
  rides: [String]
});

module.exports = mongoose.model("User", UserSchema);
