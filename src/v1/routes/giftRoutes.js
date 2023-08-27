

const express = require("express");
const giftController = require("../../controlers/giftController");
const {auth} = require("../../middleware/auth");

const router = express.Router();

router.get("/", auth, giftController.getAllGifts);

router.get("/:giftId", giftController.getOneGift);

router.post("/", giftController.createNewGift);

router.patch("/:giftId", giftController.updateOneGift);

router.delete("/:giftId", giftController.deleteOneGift);

module.exports = router;