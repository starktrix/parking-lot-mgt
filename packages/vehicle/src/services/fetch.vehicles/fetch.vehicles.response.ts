import { Either } from "../../../../shared/core/either";
import { Option } from "../../../../shared/core/option";
import { VehicleDTO } from "../../dto/vehicle.dto";
import { Vehicle } from "../../subdomain/entities/vehicle";

// export interface FetchVehicleResponseDTO {
//     data: VehicleDTO[]
// }

// the left side of either does not neccessarily need be an error
// that is why Either is a generalization over Resutl and options
// export type FetchVehicleResponseDTO = Either<any, Option<{ data: VehicleDTO[]}> >
export type FetchVehicleResponseDTO_ = Option<{ data: VehicleDTO[] }>

export type FetchVehicleResponse = Either<any, Option<Vehicle[]>>