import { Option } from "../../../shared/core/option"

export interface AuthRepository {
    save(authDetails: any): Promise<void>
    getUserAuthByEmail(email: string): Promise<Option<Record<any, any>>>
    exists(email: string): Promise<boolean>
}