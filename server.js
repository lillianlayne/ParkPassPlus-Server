require("dotenv").config();
require("./config/db.connection");
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const rideRouter = require("./routes/rides");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/ride", rideRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
