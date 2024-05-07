const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RideSchema = new Schema({
  name: String,
  description: String,
  inches: Number, // height requirement in inches
  weight: Number, // weight requirement in pounds
});
