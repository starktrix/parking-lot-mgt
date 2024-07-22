import { vehicleRepo } from "../../repo";
import { UpdateVehicleController } from "./update.vehicle.controller";
import { UpdateVehicle } from "./update.vehicle.service";

const updateVehicle = new UpdateVehicle(vehicleRepo)
const updateVehicleController = new UpdateVehicleController(updateVehicle)

export {
    updateVehicleController
}