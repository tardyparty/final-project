const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: String,
  message: String
});

const Comment = mongoose.model("Inventory", commentSchema);

module.exports = Comment;