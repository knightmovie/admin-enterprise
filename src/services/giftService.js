// In src/database/GiftService.js
const Gift = require("../database/Gift");
const { v4: uuid } = require("uuid");

const getAllGifts = () => {
  return Gift.getAllGifts();
};

const getOneGift = (giftId) => {
  return Gift.getOneGift(giftId);
};

const createNewGift = (newGift) => {
  const giftToInsert = {
    ...newGift,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    return Gift.createNewGift(giftToInsert);
  } catch (e) {
    throw e;
  }
};

const updateOneGift = (giftId, changes) => {
  return Gift.updateOneGift(giftId, changes);
};

const deleteOneGift = (giftId) => {
  return Gift.deleteOneGift(giftId)
};

module.exports = {
  getAllGifts,
  getOneGift,
  createNewGift,
  updateOneGift,
  deleteOneGift,
};