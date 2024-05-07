const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  Ride: String,
  Day: String,
  WishList: String,
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
