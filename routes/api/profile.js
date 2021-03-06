const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const auth = require("../auth");

router.param("username", function( req, res, next, username ) {
    User.findOne({ username: username })
        .then( function( user ) {
            if ( !user ) { return res.sendStatus(404)}

            req.profile = user;

            return next();
        })
        .catch(next);
});

router.get("/:username", auth.optional, function( req, res, next ) {
    return res.json({ profile: req.profile.toProfileJSONFor() });
})

module.exports = router;
