const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const commentRoutes = require("./comment");

// Book routes
router.use("/inventory", inventoryRoutes);
router.use("/comment", commentRoutes)

module.exports = router;
