const path = require("path");
const router = require("express").Router();
const servicesRoutes = require("./api/services");
const appointmentsRoutes = require("./api/appointments");

router.use("/api", servicesRoutes);
router.use("/api", appointmentsRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
