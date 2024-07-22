import { Mapper } from "../../../shared/mapper.port";
import { VehicleDTO } from "../dto/vehicle.dto";
import { Vehicle } from "../subdomain/entities/vehicle";
import { LicenseNumber } from "../subdomain/valueobjects/licenseNumber";

// stub the VehicleRecord for now
interface VehicleRecord {
    _id: string
    license_number: string
    type: string
    owner: string
    // createdAt: string
    // updatedAt: string
    // version: number
}

class _VehicleMapper implements Mapper<Vehicle, VehicleRecord, VehicleDTO> {

     toDomain(db: VehicleRecord): Vehicle {
        const vehicle: Vehicle = Vehicle.create({
            licenseNumber: LicenseNumber.create(db.license_number),
            owner: db.owner,
            type: db.type,
        }, db._id)

        return vehicle
    }

    toDTO(domain: Vehicle): VehicleDTO {
        const domainProps = domain.getPropsValue()
        return {
            id: domain.getId() as string,
            licenseNumber: domainProps.licenseNumber.toValue(),
            ownerId: domainProps.owner,
            vehicleType: domainProps.type

        }
    }

    toPersistence(domain: Vehicle): VehicleRecord {
        // the vehicle record is a demo, the createdAt/updatedAt are actually db to update
        // its just a demo purpose, there might be other useful data in db not exposed
        // or the name syntax could be entired different
        const domainProps = domain.getPropsValue()
        return {
            _id: domain.getId() as string,
            license_number: domainProps.licenseNumber.toValue(),
            owner: domainProps.owner,
            type: domainProps.type
        }
    }

}

export function VehicleMapper() {
    return new _VehicleMapper()
}