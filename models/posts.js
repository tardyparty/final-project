const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  body: String,
  comments: [{
    type: Schema.Types.ObjectId, ref: "Comment"
  }]
});

postSchema.methods.toJSONFor = function( user ) {
  return {
    body: this.body,
    comments: this.comments,
    author: this.author.toProfileJSONFor(user),
  }
}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;