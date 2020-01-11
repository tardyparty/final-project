const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const commentRoutes = require("./comment");
const postRoutes = require("./post");
const userRoutes = require("./user");


router.use("/inventory", inventoryRoutes);
router.use("/comment", commentRoutes);
router.use("/posts", postRoutes);
router.use("/user", userRoutes);

router.user( function(err, req, res, next) {
    if (err.name === "ValidationError" ) {
        return res.status(422).json({
            errors: Object.keys(err.errors).reduce( function(errors, key) {
                errors[key] = err.errors[key].message;

                return errors;
            }, {})
        });
    }

    return next(err);
});

module.exports = router;
