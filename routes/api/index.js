const router = require("express").Router();
const documentRoutes = require("./documents");

// Document routes
router.use("/documents", documentRoutes);

module.exports = router;
