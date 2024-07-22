import { ServiceError } from "../../../../shared/core/error";

export namespace RegisterVehicleErrors {
    export class InvalidLincenseNumberError extends ServiceError {
        constructor(type?: string, detail?: any) {
            super({
                message: "Invalid license plate number",
                statusCode: 400,
                type,
                detail
            });
        }
    }
}