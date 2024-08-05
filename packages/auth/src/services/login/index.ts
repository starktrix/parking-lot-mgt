import { AuthMemoryReopository } from "../../repo/memory";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";

const loginService = new LoginService(new AuthMemoryReopository())
const loginController = new LoginController(loginService)

export {loginController}