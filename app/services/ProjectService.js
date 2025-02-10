const dataFe = require("../../data/Frontend");
const dataBe = require("../../data/Backend");
const dataDs = require("../../data/Design");

const dataAll = [...dataFe, ...dataBe, ...dataDs];

const dataType = {
  frontend: dataFe,
  backend: dataBe,
  design: dataDs,
};

const defaultImage =
  "https://i.pinimg.com/736x/28/63/de/2863de0f47b4a02bc497307917b800f8.jpg";

const getAllProjects = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  let result = dataAll.slice(offset, Number(offset) + Number(limit));
  const dataCount = dataAll.length;

  result = result
    .map((data, index) => ({
      id: data.id || `${data.type}-${index + 1}`,
      image: data.images[0] || defaultImage,
      title: data.title || "",
      type: data.type || "",
      end: data.end || "",
      dataLink:
        {
          idProject: data.id,
          online: data.dataLink.online,
          github: data.dataLink.github,
          figma: data.dataLink.figma,
        } || {},
    }))
    .sort((a, b) => new Date(b.end) - new Date(a.end));

  return { dataCount: dataCount, result: result };
};

const getProjectByType = async (type, page = 1, limit = 10) => {
  const typeSmall = type.toLowerCase();
  const dataByType = [...(dataType[typeSmall] || [])];
  const offset = (page - 1) * limit;
  const dataCount = dataByType.length;
  let result = dataByType
    .sort((a, b) => new Date(b.end) - new Date(a.end))
    .slice(offset, Number(offset) + Number(limit));

  result = result.map((data, index) => ({
    id: data.id || `${data.type}-${index + 1}`,
    image: data.images[0] || defaultImage,
    title: data.title || "",
    type: data.type || "",
    end: data.end || "",
    dataLink:
      {
        idProject: data.id,
        online: data.dataLink.online,
        github: data.dataLink.github,
        figma: data.dataLink.figma,
      } || {},
  }));

  return { dataCount: dataCount, result: result };
};

const getProjectDetail = (id) => {
  const result = dataAll.find((item) => item.id === id);

  if (!result) throw new Error(404);

  const projectConnected = result.projectConnect.map((data) => {
    return dataAll.find((item) => item.id === data);
  });
  return { result, projectConnected };
};

const getProjectLast = async () => {
  const result =
    dataAll.sort((a, b) => new Date(b.end) - new Date(a.end)).slice(0, 2) || [];
  return result.map((data, index) => ({
    id: data.id || `${data.type}-${index + 1}`,
    image: data.images[0] || defaultImage,
    title: data.title || "",
    type: data.type || "",
    end: data.end || "",
    dataLink:
      {
        idProject: data.id,
        online: data.dataLink.online,
        github: data.dataLink.github,
        figma: data.dataLink.figma,
      } || {},
  }));
};

module.exports = {
  getAllProjects,
  getProjectByType,
  getProjectDetail,
  getProjectLast,
};
