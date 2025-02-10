const videos = require("../../data/Videos");

const getAllDataVideos = async () => {
  return videos;
};

module.exports = { getAllDataVideos };
