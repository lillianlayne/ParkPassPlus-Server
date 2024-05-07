const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  name: String,
  ticketType: String,
  ride: String,
});

module.exports = mongoose.model("Ticket", TicketSchema);
