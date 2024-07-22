import { Either, left, right } from "../../../../shared/core/either";
import { Service } from "../../../../shared/services/service";
import { IVehicleRepository } from "../../repo/vehicle.repo.port";
import { Vehicle } from "../../subdomain/entities/vehicle";
import { LicenseNumber } from "../../subdomain/valueobjects/licenseNumber";
import { RegisterVehicleDTO } from "./register.dto";
import { RegisterVehicleErrors } from "./register.error";
import { RegisterVehicleResponse } from "./register.response";


export class RegisterVehicle implements Service<RegisterVehicleDTO, RegisterVehicleResponse>  {
    private vehicleRepo: IVehicleRepository

    constructor(vehicleRepo: IVehicleRepository) {
        this.vehicleRepo = vehicleRepo
    }

    // update the response to be a result type
    async execute(req: RegisterVehicleDTO): Promise<RegisterVehicleResponse> {
        try {
        // validate dto (done in controller, because it is the closest ot input)
        // and input needs to be validated before proceeding
        // construct entity
        const license_number = LicenseNumber.create(req.licenseNumber)
        // throw new RegisterVehicleErrors.InvalidLincenseNumberError()
        const vehicle = Vehicle.create({
            licenseNumber: license_number,
            owner: req.ownerId,
            type: req.vehicleType
        })
        // performance action
        // persist entity
        // return msg/error

            await this.vehicleRepo.save(vehicle)
            return right({message: "vehicle registered successfully"})
        } catch (error) {
            return left(error)
        }

    }
}