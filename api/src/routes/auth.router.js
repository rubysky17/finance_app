const authRouter = require("express").Router();

const AuthController = require("../controllers/auth.controller")

authRouter.post("/", AuthController.signUp)

module.exports = authRouter;