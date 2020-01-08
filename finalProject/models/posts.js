const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: String,
  message: String,
  comments: [
      { type: Schema.Types.ObjectId, ref: "Comment" }
  ]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;