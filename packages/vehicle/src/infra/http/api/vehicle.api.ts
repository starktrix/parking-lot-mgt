import Router, { Request, Response } from "express"

// import { IRequest, IResponse } from "../../../../../shared/infra/http/base"
import { fetchVehiclesController } from "../../../services/fetch.vehicles"
import { registerVehicleController } from "../../../services/register.vehicle"
import { updateVehicleController } from "../../../services/update.vehicle"

// const vehicleRouterV1 = {
//     post(s: string, d: any){},
//     put(s: string, d: any){},
//     get(s: string, d: any){}
// }

// const req = {} as IRequest
// const res = {} as IResponse

const vehicleRouterV1 = Router()

vehicleRouterV1.post("/vehicles/register", (req, res) => registerVehicleController.execute(req, res))
vehicleRouterV1.put("/vehicles/:vehicleId", (req,res) => updateVehicleController.execute(req, res))
vehicleRouterV1.get("/vehicles", (req, res) => fetchVehiclesController.execute(req, res))


export {vehicleRouterV1}