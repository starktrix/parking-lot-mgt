import { PaginatedParams, PaginatedQueryBase, PaginatedQueryParams } from "../../../../shared/cqrs/query.base";



export type FetchVehicleQueryDTO = {
    ownerId?: string
    licenseNumber?: string
    vehicleType?: string
}


// /**
//  *  This is too much for a query
//  *  @deprecated
//  */
export class FetchVehicleQuery extends PaginatedQueryBase {
    readonly ownerId?: string;
    readonly licenseNumber?: string;
    readonly vehicleType?: string;

    constructor(props: PaginatedParams<FetchVehicleQuery>) {
        super(props);
        this.licenseNumber = props.licenseNumber
        this.ownerId = props.ownerId
        this.vehicleType = props.vehicleType
    }
}