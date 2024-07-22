import { left, right } from "../../../../shared/core/either";
import { Option } from "../../../../shared/core/option";
import { Service } from "../../../../shared/services/service";
import { IVehicleRepository } from "../../repo/vehicle.repo.port";
import { Vehicle } from "../../subdomain/entities/vehicle";
import { UpdateVehicleDTO } from "./update.vehicle.dto";
import { UpdateVehicleResponse } from "./update.vehicle.response";

export class UpdateVehicle implements Service<UpdateVehicleDTO, UpdateVehicleResponse>{

    private vehicleRepo: IVehicleRepository

    constructor(vehicleRepo: IVehicleRepository) {
        this.vehicleRepo = vehicleRepo
    }


    async execute(req: UpdateVehicleDTO): Promise<UpdateVehicleResponse> {

        try {
            const _vehicle = await this.vehicleRepo.getVehicleById(req.ownerId)
         
            // narrow down to Some
            // negate sinc we want to execute for None instance
            if (!_vehicle.isSome()) {
                return right({message: "no vehicle found"})
            } 

            const vehicle = _vehicle.getValue()
            vehicle.updateLicenseNumber(req.licenseNumber)
    

            await this.vehicleRepo.save(vehicle)
            return right({message: "vehicle updated successfully"})
        } catch (error) {
            return left(error)
        }
        
    }
}
