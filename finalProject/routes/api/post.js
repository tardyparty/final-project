const router = require("express").Router();
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Post = mongoose.model("Post");
const postController = require("../../controllers/postController");
const auth = require("../auth");

// Matches with "/api/posts"
router.route("/")
  .get(postController.findAll);

router.post("/", auth.required, function( req, res, next ) {
  User.findById( req.payload.id ) 
    .then( function( user ) {
      if ( !user ) { return res.sendStatus(401)}

      let post = new Post(req.body.post);

      post.author = user;

      return post.save()
        .then( function() {
          console.log(post.username);
          return res.json({ post: post.toJSONFor(user)});
        })
    })
    .catch(next);
});

router.post("/:post/comments", auth.required, function( req, res, next ) {
  User.findById( req.payload.id )
    .then( function( user ) {
      if ( !user ) { return res.sendStatus(401)}

      let comment = new Comment(req.body.comment);
      comment.post = req.post;
      comment.author = user;

      return comment.save()
        .then( function() {
          req.post.comments.push(comment);

          return req.post.save()
            .then( function( post ) {
              res.json({ comment: comment.toJSONFor(user)});
            });
        });
    })
    .catch(next);
});

router.get("/:post/comments", auth.optional, function( req, res, next ) {
  Promise.resolve( req.payload ? User.findById( req.payload.id ) : null)
    .then( function( user ) {
      return req.post.populate({
        path: "comments",
        populate: {
          path: "author"
        },
        options: {
          sort: {
            createdAt: "desc"
          }
        }
      })
      .execPopulate()
      .then( function( post ) {
        return res.json({ comments: req.post.comments.map( comment => {
          return comment.toJSONFor( user );
        })});
      });
  })
  .catch(next);
})

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

module.exports = router;