const router = require("express").Router();
const documentsController = require("../../controllers/documentsController");

// Matches with "/api/documents"
router.route("/")
  .get(documentsController.findAll)
  .post(documentsController.create);

// Matches with "/api/documents/:id"
router
  .route("/:id")
  .get(documentsController.findById)
  .put(documentsController.update)
  .delete(documentsController.remove);

module.exports = router;
