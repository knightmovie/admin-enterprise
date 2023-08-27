const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllGifts = () => {
  return DB.gifts;
};

const getOneGift = (giftId) => {
  const gift = DB.gifts.find((gift) => gift.id === giftId);
  if (!gift) {
    return;
  }
  return gift;
};

const createNewGift = (newGift) => {
  const isAlreadyAdded =
    DB.gifts.findIndex((gift) => gift.name === newGift.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name '${newGift.name}' already exists`,
    };
  }
  DB.gifts.push(newGift);
  saveToDatabase(DB);
  return newGift;
};

const updateOneGift = (giftId, changes) => {
  const indexForUpdate = DB.gifts.findIndex((gift) => gift.id === giftId);
  if (indexForUpdate === -1) {
    return;
  }
  const updatedGift = {
    ...DB.gifts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.gifts[indexForUpdate] = updatedGift;
  saveToDatabase(DB);
  return updatedGift;
};

const deleteOneGift = (workoutId) => {
  const indexForDeletion = DB.gifts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.gifts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllGifts,
  createNewGift,
  getOneGift,
  deleteOneGift,
  updateOneGift,
};
