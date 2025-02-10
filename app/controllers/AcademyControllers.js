const { responseStandard } = require("../../service/resTemp");
const AcademyService = require("../services/AcademyService");

const getAllAcademy = async (req, res, next) => {
  try {
    const academy = await AcademyService.getAllDataAcademy();
    responseStandard(200, academy, res, "Get Data Academy Is Succesfuly");
  } catch (error) {
    responseStandard(500, { error }, res, "Error Serve Data");
  }
};

module.exports = { getAllAcademy };
