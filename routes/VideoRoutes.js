const express = require("express");
const { getAllVideo } = require("../app/controllers/VideosController");
const router = express.Router();

router.get("/", getAllVideo);

module.exports = router;
