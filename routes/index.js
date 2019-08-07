const path = require("path");
const router = require("express").Router();
const servicesRoutes = require("./api/services");
const appointmentsRoutes = require("./api/appointments");
const providersRoutes = require("./api/providers");
const authenticationRoutes = require('./authentification');

router.use("/api", servicesRoutes);
router.use("/api", appointmentsRoutes);
router.use("/api", providersRoutes);

router.use("/auth", authenticationRoutes)

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
