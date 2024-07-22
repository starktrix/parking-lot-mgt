import { Either, left, right } from "../../../../shared/core/either";
import { None, Option, Some } from "../../../../shared/core/option";
import { Service } from "../../../../shared/services/service";
import { IVehicleRepository } from "../../repo/vehicle.repo.port";
import { FetchVehicleQuery, FetchVehicleQueryDTO } from "./fetch.vehicles.dto";
import { FetchVehicleResponse } from "./fetch.vehicles.response";

export class FetchVehicles
  implements Service<FetchVehicleQueryDTO, FetchVehicleResponse>
{
  private vehicleRepo: IVehicleRepository;

  constructor(vehicleRepo: IVehicleRepository) {
    this.vehicleRepo = vehicleRepo;
  }

  async execute(req: FetchVehicleQuery): Promise<FetchVehicleResponse> {
    try {
      const result = await this.vehicleRepo.getVehicles(req);
      if (!result.isSome()) {
        return right(None());
      }

      return right(result);
    } catch (error) {
      return left(error);
    }
  }
}
