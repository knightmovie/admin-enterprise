const giftService = require("../services/giftService");

const getAllGifts = (req, res) => {
  const allGifts = giftService.getAllGifts();
  res.send({ status: "OK", data: allGifts });
};

const getOneGift = (req, res) => {
  const Gift = giftService.getOneGift();
  res.send("Get an existing Gift");
};

const createNewGift = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
              "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
  }

  const newGift = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdGift = giftService.createNewGift(newGift);
    res.status(201).send({ status: "OK", data: createdGift });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneGift = (req, res) => {
  const {
    body,
    params: { giftId },
  } = req;
  if (!giftId) {
    return;
  }
  const updatedGift = giftService.updateOneGift(giftId, body);
  res.send({ status: "OK", data: updatedGift });
};

const deleteOneGift = (req, res) => {
  const {
    params: { giftId },
  } = req;
  if (!giftId) {
    return;
  }
  giftService.deleteOneGift(giftId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllGifts,
  getOneGift,
  createNewGift,
  updateOneGift,
  deleteOneGift,
};
