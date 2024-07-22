import { Either } from "../../../../shared/core/either";
import { UpdateVehicleErrors } from "./update.vehicle.error";

export type UpdateVehicleResponse = Either<
UpdateVehicleErrors.InvalidLincenseNumberError,
  { message: string }
>;