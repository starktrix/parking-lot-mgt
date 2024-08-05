import { Either } from "../../../../shared/core/either";
import { Option } from "../../../../shared/core/option";

interface Token {
    token: string
}

export type LoginResponse = Either<any, Option<Token>>