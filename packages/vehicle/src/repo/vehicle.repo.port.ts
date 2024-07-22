import { Option } from "../../../shared/core/option";
import { Vehicle } from "../subdomain/entities/vehicle";

export interface IVehicleRepository {
    // commands
    save(vehicle: Vehicle): Promise<void>;
    delete(id: string): Promise<void>;
    // queries
    getVehicleById(id: string): Promise<Option<Vehicle>>;
    getVehicleByLicenseNumber(id: string): Promise<Option<Vehicle>>;
    getVehicles(options: Record<string, any>): Promise<Option<Vehicle[]>>;
}