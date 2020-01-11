const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const User = mongoose.model("User");
const auth = require("../auth");

router.post("/new", function(req, res, next) {
    let user = new User();

    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);

    user.save()
        .then( function() {
        return res.json( { user: user.toAuthJSON()});
        })
        .catch(next);
})

module.exports = router;