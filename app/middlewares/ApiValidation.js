const { responseStandard } = require("../../service/resTemp");

const validationApi = (req, res, next) => {
  const apiKey = req.headers["authorization"];

  if (!apiKey || apiKey !== `Bearer ${process.env.API_KEY}`)
    return responseStandard(403, {}, res, "Enter The Forbidden API KEY");

  next();
};

module.exports = validationApi;
