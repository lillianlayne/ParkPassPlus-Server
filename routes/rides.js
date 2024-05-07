const express = require("express");
const router = express.Router();

const rideCtrl = require("../controllers/rides");

//rides index route
router.get("/", rideCtrl.index);
//ride create route
router.post("/", rideCtrl.create);
//specific ride read route
router.get("/:id", rideCtrl.show);
//ride delete route
router.delete("/:id", rideCtrl.delete);
//ride update route
router.put("/:id", rideCtrl.update);

module.exports = router;
