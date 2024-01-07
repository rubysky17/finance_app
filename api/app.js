require("dotenv").config();

const express = require('express');
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const rootRouter = require("./src/routes/root.router");
const { PORT } = require("./src/configs/config.mongodb");
const swaggerUi = require('swagger-ui-express');
const { swaggerDocs } = require("./src/docs/swagger");

const app = express();
const cors = require('cors');

// * init middlewares
app.use(express.json()); // Convert JSON string
app.use(morgan("dev")); // Console.log terminal in Dev
app.use(helmet()); // HTTP protection
app.use(compression()); // HTTP protection
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Docs Swagger

// * init DB
require("./src/dbs/init.mongodb");

const corsOptions = {
    origin: `localhost:${PORT}`,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

// * init Router
app.use("/v1/api", rootRouter);

app.get('/', (req, res) => {
    res.send('Pong App is Working')
})

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})