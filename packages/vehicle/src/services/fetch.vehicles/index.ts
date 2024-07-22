import { vehicleRepo } from "../../repo";
import { FetchVehiclesController } from "./fetch.vehicles.controller";
import { FetchVehicles } from "./fetch.vehicles.service";

const fetchVehicles = new FetchVehicles(vehicleRepo)
const fetchVehiclesController = new FetchVehiclesController(fetchVehicles)
export {
    fetchVehiclesController
}