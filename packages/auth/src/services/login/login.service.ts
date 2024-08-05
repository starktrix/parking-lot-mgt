import { AuthRepository } from "../../repo/auth.repo.port";
import { Service } from "../../../../shared/services/service";
import { LoginResponse } from "./login.respnses";
import { None, Some } from "../../../../shared/core/option";
import { left, right } from "../../../../shared/core/either";
import { TokenUtility } from "../token.utility";

interface LoginRequest {
    email: string
    password: string
}

export class LoginService implements Service<LoginRequest, LoginResponse> {
    constructor(private repo: AuthRepository) {
        this.repo = repo
    }

    async execute(request?: LoginRequest): Promise<LoginResponse> {
        try {
            const result = await this.repo.exists(request.email)
            if (!result) {
                return right(None())
            }

            const token = TokenUtility.generate()
            return right(Some({token}))     

        } catch (error) {
            return left(error);
        }
    }

}