const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"

router.route("/appointments").post(appointmentsController.create);

//router.route("/user/:id/appointments").get();

module.exports = router;
