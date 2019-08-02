const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const slotsController = require("../../controllers/slotsController");
// Matches with "/api/provider"

router
  .route("/providers/:id/appointments")
  .get(appointmentsController.findAllByProvider);

router
  .route("/providers/:providerId/slots/month/:month")
  .get(slotsController.findByProviderServiceMonth);
router
  .route("/providers/:id/slots/day")
  .get(slotsController.findByProviderServiceDay);

module.exports = router;
