const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: String,
  author: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  post: {
    type: Schema.Types.ObjectId, ref: "Post"
  },
}, { timestamps: true });

commentSchema.methods.toJSONFor = function( user ) {
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    author: this.author.toProfileSJONFor(user)
  }
}

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
