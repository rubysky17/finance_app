const authRouter = require("./auth.router");
const walletRouter = require("./wallet.router");

const rootRouter = require("express").Router();

rootRouter.use("/auth", authRouter)
rootRouter.use("/wallet", walletRouter)


module.exports = rootRouter;