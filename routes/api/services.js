const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"

router.route("/api/services").get();

//router.route("/api/services/").get();
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .delete(booksController.remove)
//   .get(booksController.findById);

module.exports = router;
