const {
  responseStandard,
  responsePagination,
} = require("../../service/resTemp");
const ProjectSevice = require("../services/ProjectService");

const isNotFound = (res) =>
  responseStandard(404, {}, res, "Project Is Not Found");
const isServerTrouble = (res) =>
  responseStandard(500, {}, res, "Server Is Trouble");

const getProjects = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const projects = await ProjectSevice.getAllProjects(page, limit);
    responsePagination(
      200,
      projects.result,
      res,
      "Get All Data Succesfuly",
      limit,
      projects.dataCount,
      page
    );
  } catch (error) {
    return responseStandard(500, {}, res, "Error Serve Data");
  }
};

const getAllProjectByType = async (req, res, next) => {
  try {
    const { type } = req.params;
    const { page, limit } = req.query;
    const projects = await ProjectSevice.getProjectByType(type, page, limit);
    responsePagination(
      200,
      projects.result,
      res,
      "Get Data Is Succesfuly",
      limit,
      projects.dataCount,
      page
    );
  } catch (error) {
    return responseStandard(500, {}, res, "Error Serve Data");
  }
};

const getDetailProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await ProjectSevice.getProjectDetail(id);
    responseStandard(200, project, res, "Get Project Is Succesfuly");
  } catch (error) {
    return isNotFound(res);
  }
};

const getLastProjects = async (req, res, next) => {
  try {
    const project = await ProjectSevice.getProjectLast();
    responseStandard(200, project, res, "Get Project Is Succesfully");
  } catch (error) {
    return isNotFound(res);
  }
};

module.exports = {
  getProjects,
  getAllProjectByType,
  getDetailProjectById,
  getLastProjects,
};
