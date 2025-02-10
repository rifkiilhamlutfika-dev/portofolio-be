const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const projectRoutes = require("./routes/ProjectsRoutes");
const academyRoutes = require("./routes/AcademyRoutes");
const videosRoutes = require("./routes/VideoRoutes");
const { responseStandard } = require("./service/resTemp");
const validationApi = require("./app/middlewares/ApiValidation");

app.use("/project", validationApi, projectRoutes);
app.use("/academy", validationApi, academyRoutes);
app.use("/videos-me", validationApi, videosRoutes);

app.use((req, res, next) => {
  responseStandard(404, {}, res, "Endpoint Is Not Found");
});

app.listen(port || 4000, () => console.log(`Running In Port ${port}`));
