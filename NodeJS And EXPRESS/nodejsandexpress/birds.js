const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from Home page route");
});

router
  .route("/about")
  .get((req, res) => res.send("About birds from get"))
  .post((req, res) => res.send("About birds from post"));

module.exports = router;
