const express = require("express");
const router = express.Router();
const {
  getProjects,
  getAllProjectByType,
  getDetailProjectById,
  getLastProjects,
} = require("../app/controllers/ProjectControllers");

router.get("/", getProjects);
router.get("/last", getLastProjects);
router.get("/type/:type", getAllProjectByType);
router.get("/detail/:id", getDetailProjectById);

module.exports = router;
