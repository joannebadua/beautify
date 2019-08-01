const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/provider"

router
  .route("/providers/:id/appointments")
  .get(appointmentsController.findAllByProvider);

module.exports = router;
