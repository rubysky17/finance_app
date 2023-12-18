const authRouter = require("./auth.router");

const rootRouter = require("express").Router();

rootRouter.use("/auth", authRouter)

module.exports = rootRouter;