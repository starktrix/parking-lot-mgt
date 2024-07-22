import { left } from "../../../../shared/core/either";
import {
  ExpressBaseController,
  IRequest,
  IResponse,
} from "../../../../shared/infra/http/base";
import { UpdateVehicleErrors } from "./update.vehicle.error";
import { UpdateVehicle } from "./update.vehicle.service";

export class UpdateVehicleController extends ExpressBaseController {
  private useCase: UpdateVehicle;

  constructor(useCase: UpdateVehicle) {
    super();
    this.useCase = useCase;
  }
  async executeImpl(req: IRequest, res: IResponse): Promise<any> {
    // obtain vehicle Id from query
    const vehicleId = req.params?.vehicleId || "no vehicle id"
    console.log("vehicle id from params: ", vehicleId)
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
            case UpdateVehicleErrors.InvalidLincenseNumberError:
            return this.badRequest(res, error, req.url);
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
