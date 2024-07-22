import Datastore from "nedb";
import { VehicleMemoryRepository } from "./memory/vehicle.repo";

const model = new Datastore({
    filename: "./src/repo/memory/vehicles.db",
    autoload: true,
  });
const vehicleRepo = new VehicleMemoryRepository(model)


export {
    vehicleRepo
}