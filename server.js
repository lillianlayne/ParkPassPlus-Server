require("dotenv").config();
require("./config/db.connection");
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
