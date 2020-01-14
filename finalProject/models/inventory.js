const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  product: String,
  description: String,
  retail: Number,
  pricePerNight: Number,
  quantity: Number
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;