const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const commentRoutes = require("./comment");
const postRoutes = require("./post");

// Book routes
router.use("/inventory", inventoryRoutes);
router.use("/comment", commentRoutes);
router.use("/post", postRoutes);

module.exports = router;
