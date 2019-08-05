const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

// Matches with "/api/services"

router.route("/services/category/:category").get(servicesController.findAllByCategory);
router
  .route("/services/:id/providers")
  .get(servicesController.findServiceProviders);


//router.route("/api/services/").get();

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .delete(booksController.remove)
//   .get(booksController.findById);

module.exports = router;
