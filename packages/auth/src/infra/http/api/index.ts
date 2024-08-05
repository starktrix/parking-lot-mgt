import { loginController } from "../../../services/login";
import { logoutController } from "../../../services/logout";
import { registerController } from "../../../services/register";
import { Router } from "express";

const authRouter = Router()

authRouter.post("/auth/register", registerController.execute)
authRouter.post("/auth/login", loginController.execute)
authRouter.post("/auth/logout", logoutController.execute)

export {authRouter}