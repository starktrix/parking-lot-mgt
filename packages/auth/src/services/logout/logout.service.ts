import { AuthRepository } from "@repo/auth.repo.port";
import { Service } from "../../../../shared/services/service";


export class LogoutService implements Service<void, void> {
    constructor() {
    }

    execute(): Promise<void> {
        throw new Error("Method not implemented.");
        try {
            
        } catch (error) {
            
        }
    }

}