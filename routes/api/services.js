const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

// Matches with "/api/services"

router.route("/services/category/:category").get(servicesController.findAllByCategory);
router
  .route("/services/:id/providers")
  .get(servicesController.findServiceProviders);

router.route("/services").post(servicesController.create);

// router
//   .route("/services/:id/providers")
//   .get(servicesController.findServiceProviders);

module.exports = router;
