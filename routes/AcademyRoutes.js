const express = require("express");
const router = express.Router();

const { getAllAcademy } = require("../app/controllers/AcademyControllers");

router.get("/", getAllAcademy);

module.exports = router;
