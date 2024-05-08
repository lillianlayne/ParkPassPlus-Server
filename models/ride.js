const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RideSchema = new Schema({
  name: String,
  description: String,
  location: String,
  inches: Number, // height requirement in inches
  image: String,
});


module.exports = mongoose.model("Ride", RideSchema);
