import {
  ExpressBaseController,
  IRequest,
  IResponse,
} from "../../../../shared/infra/http/base";
import { RegisterVehicleErrors } from "./register.error";
import { RegisterVehicle } from "./register.service";

export class RegisterVehicleController extends ExpressBaseController {
  private useCase: RegisterVehicle;

  constructor(useCase: RegisterVehicle) {
    super();
    this.useCase = useCase;
  }
  async executeImpl(req: IRequest, res: IResponse): Promise<any> {
    // validate/sanitize inputs, i.e req.body
    const { licenseNumber, vehicleType, ownerId } = req.body;

    const dto = {
      licenseNumber,
      vehicleType,
      ownerId,
    };
    try {
      const result = await this.useCase.execute(dto);
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
            case RegisterVehicleErrors.InvalidLincenseNumberError:
            return this.badRequest(res, error, req.originalUrl)
          default:
            return this.internalServerError(res, error);
        }
      }
      return this.ok(res, result.value);
    } catch (error) {
      return this.internalServerError(res, error);
    }
  }
}
