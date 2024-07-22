import { vehicleRepo } from "../../repo";
import { RegisterVehicleController } from "./register.controller";
import { RegisterVehicle } from "./register.service";

const registerVehicle = new RegisterVehicle(vehicleRepo)
const registerVehicleController = new RegisterVehicleController(registerVehicle)

export {
    registerVehicleController
}