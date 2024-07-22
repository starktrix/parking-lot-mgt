import { PaginatedResponse, SortBy } from "../../../../shared/cqrs/query.base";
import {
  ExpressBaseController,
  IRequest,
  IResponse,
} from "../../../../shared/infra/http/base";
import { VehicleMapper } from "../../mappers/vehicleMap";
import { Vehicle} from "@domain/entities/vehicle"
import { FetchVehicleQuery, FetchVehicleQueryDTO } from "./fetch.vehicles.dto";
import { FetchVehicles } from "./fetch.vehicles.service";

export class FetchVehiclesController extends ExpressBaseController {
  readonly useCase: FetchVehicles;

  constructor(useCase: FetchVehicles) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: IRequest, res: IResponse): Promise<any> {
    const limit = Number(req?.query?.limit);
    const page = Number(req?.query?.page);
    const dir = req?.query?.dir ? req?.query?.dir as string : "desc";
    const sortBy = req?.query?.sortBy
      ? { field: req?.query?.sortBy, dir } as SortBy
      : undefined;
    const request = req.body as FetchVehicleQueryDTO; //validate to match dto

    try {
      const queryDto = new FetchVehicleQuery({
        licenseNumber: request?.licenseNumber,
        ownerId: request?.ownerId,
        vehicleType: request?.vehicleType,
        limit,
        page,
        sortBy: sortBy,
      });
      const result = await this.useCase.execute(queryDto);

      // changing this isLeft && removing the return statements works
      // but keeping the return and isLeft lints errrors
      if (!result.isRight()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.internalServerError(res, error);
        }
      }

      // no need for this check
      if (result.isRight()) {
        // console.log("Right: ", result.isRight())
        const data = result.value;
        if (!data.isSome()) {
          // console.log("Some: ", data.isSome())
          // optionally pass in response data
          return this.ok(res, {
            success: true,
            message: "no vehicle(s) found",
            data: []
          });
        }
        const vehicles = (data.getValue() as Vehicle[]).map((v) =>
          VehicleMapper().toDTO(v)
        );

        // 1
        return this.ok(res, {
          success: true,
          message: "vehicle found",
          data: vehicles,
        });
        // 2
        // const vehicles_ = new PaginatedResponse({
        //     data: vehicles,
        //     limit: queryDto.limit,
        //     count: queryDto.count,
        //     page: queryDto.page
        // })
        // this.ok(res, vehicles)
      }
    } catch (error) {
      return this.internalServerError(res, error)
    }
  }
}