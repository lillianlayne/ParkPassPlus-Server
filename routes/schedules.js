const express = require("express");
const router = express.Router();

const scheduleCtrl = require("../controllers/Schedules");

router.get("/", scheduleCtrl.index);

router.post("/", scheduleCtrl.create);

router.get("/:id", scheduleCtrl.show);

router.delete("/:id", scheduleCtrl.delete);

router.put("/:id", scheduleCtrl.update);

module.exports = router;
