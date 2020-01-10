const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const commentRoutes = require("./comment");
const postRoutes = require("./post");


router.use("/inventory", inventoryRoutes);
router.use("/comment", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
