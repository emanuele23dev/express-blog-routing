const express = require("express");
const router = express.Router();

const postControllers = require("../Controllers/postControllers.js");


router.get("/", postControllers.index);

router.get("/:slug", postControllers.show);


module.exports = router;
