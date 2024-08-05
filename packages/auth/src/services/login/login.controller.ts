import {
  ExpressBaseController,
  IRequest,
  IResponse,
} from "../../../../shared/infra/http/base";
import { LoginService } from "./login.service";

export class LoginController extends ExpressBaseController {
  constructor(private useCase: LoginService) {
    super();

    this.useCase = useCase;
  }
  async executeImpl(req: IRequest, res: IResponse): Promise<void | any> {
    try {
      const { email, password } = req.body;
      const result = await this.useCase.execute({ email, password });
      if (!result.isRight()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.internalServerError(res, error);
        }
        }
        
        return this.ok(res, {
            success: true,
            message: "login successful",
            data: result.value
        })
    } catch (error) {
      return this.internalServerError(res, error);
    }
  }
}
