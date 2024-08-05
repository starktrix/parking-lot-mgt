import { ServiceError } from "../../../../shared/core/error";

export namespace RegisterUserError {
    export class UserAlreadyExistsError extends ServiceError {
        constructor(type?: string, detail?: any) {
            super({
                message: "User already exists",
                statusCode: 400,
                type,
                detail
            });
        }
    }
}