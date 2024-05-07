require("dotenv").config();
require("./config/db.connection");
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const rideRouter = require("./routes/rides");
const AuthRouter = require("./routes/AuthRouter");
const scheduleRouter = require("./routes/schedules");
const ticketRouter = require("./routes/tickets");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/ride", rideRouter);
app.use("/auth", AuthRouter);
app.use("/schedule", scheduleRouter);
app.use("/ticket", ticketRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
