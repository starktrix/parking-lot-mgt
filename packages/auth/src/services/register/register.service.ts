import { AuthRepository } from "../../repo/auth.repo.port";
import { Service } from "../../../../shared/services/service";
import { Either, left, right } from "../../../../shared/core/either";
import { RegisterUserError } from "./register.error";
import { AuthDetails } from "../../subdomain/authdetails";

interface Req {
    email: string
    password: string
}

type Res = Either<any, string>


export class RegisterService implements Service<Req, Res> {
    constructor(private repo: AuthRepository) {
        this.repo = repo
    }
    async execute(request?: Req): Promise<Res> {
        try {
            const result = await this.repo.exists(request.email)
            if (result) {
                return left(new RegisterUserError.UserAlreadyExistsError())
            }

            await this.repo.save(new AuthDetails(request.email, request.password))

            return right("User registered successfully")

        } catch (error) {
            return left(error);
        }
    }

}