const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  name: String,
  description: String,
  color: String,
});

module.exports = mongoose.model("Ticket", TicketSchema);
