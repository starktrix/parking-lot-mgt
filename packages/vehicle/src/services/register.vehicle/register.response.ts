import { Either } from "../../../../shared/core/either";
import { RegisterVehicleErrors } from "./register.error";

export type RegisterVehicleResponse = Either<
  RegisterVehicleErrors.InvalidLincenseNumberError,
  { message: string }
>;
