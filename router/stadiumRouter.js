const express = require("express");
const {
  createStadium,
  getStadiums,
  getStadium,
  updateStadium,
  deleteStadium,
} = require("../controller/stadiumController");

const router = express.Router();

router.route("/stadium").get(getStadium).post(createStadium);

router
  .route("/stadium/:id")
  .get(getStadium)
  .patch(updateStadium)
  .delete(deleteStadium);

module.exports = router;
