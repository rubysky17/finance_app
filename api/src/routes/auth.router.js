const authRouter = require("express").Router();

const AuthController = require("../controllers/auth.controller")
const { asyncHandler } = require("../utils/auth.utils")
const { authentication } = require("../utils/auth.utils")

authRouter.post("/register", asyncHandler(AuthController.signUp));
authRouter.post("/login", asyncHandler(AuthController.login));

authRouter.use(authentication)

authRouter.post("/logout", asyncHandler(AuthController.logout));


module.exports = authRouter;