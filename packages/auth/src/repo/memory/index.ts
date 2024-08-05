import { AuthRepository } from "@repo/auth.repo.port";
import { Option } from "../../../../shared/core/option";

export class AuthMemoryReopository implements AuthRepository {
    save(authDetails: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUserAuthByEmail(email: string): Promise<Option<Record<any, any>>> {
        throw new Error("Method not implemented.");
    }
    exists(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}