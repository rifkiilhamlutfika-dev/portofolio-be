const { responseStandard } = require("../../service/resTemp");
const VideoService = require("../services/VideosService");

const getAllVideo = async (req, res, next) => {
  try {
    const videos = await VideoService.getAllDataVideos();
    responseStandard(200, videos, res, "Get Data Video Is Succesfuly");
  } catch (error) {
    responseStandard(500, { error }, res, "Error Serve Data");
  }
};

module.exports = { getAllVideo };
