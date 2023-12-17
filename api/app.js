require("dotenv").config();

const express = require('express');
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const rootRouter = require("./src/routes/root.router");
const { PORT } = require("./src/configs/config.mongodb");

const app = express();
const cors = require('cors');

// * init middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

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