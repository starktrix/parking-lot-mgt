import { AuthMemoryReopository } from "../../repo/memory";
import { RegisterService } from "./register.service";
import { RegisterController } from "./register.controller";

const registerService = new RegisterService(new AuthMemoryReopository())
const registerController = new RegisterController(registerService)

export {registerController}