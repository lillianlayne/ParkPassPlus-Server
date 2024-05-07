const express = require("express");
const router = express.Router();

const ticketCtrl = require("../controllers/tickets");

router.get("/", ticketCtrl.index);

router.post("/", ticketCtrl.create);

router.get("/:id", ticketCtrl.show);

router.delete("/:id", ticketCtrl.delete);

router.put("/:id", ticketCtrl.update);

module.exports = router;
