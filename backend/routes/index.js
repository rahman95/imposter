var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (_, res) => res.json({ foo: "bar" }));

module.exports = router;
