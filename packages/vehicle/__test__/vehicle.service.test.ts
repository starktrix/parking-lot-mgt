import { RegisterVehicle } from "@services/register.vehicle/register.service"
import { LicenseNumber } from "@domain/valueobjects/licenseNumber"
import Datastore = require("nedb");
import { VehicleMemoryRepository } from "@repo/memory/vehicle.repo";

describe("Vehicle Service", () => {
    let repo;
    
    beforeEach(() => {
        let db = new Datastore({filename: "./__test__/dbs/vehicles.db", autoload: true})
        repo = new VehicleMemoryRepository(db);
    })

    describe("RegisterVehicles", () => { 
        test("Valid Input data", async () => {
            const vehicle = {
                licenseNumber: "2IRIKI",
                vehicleType: "type",
                ownerId: "owner"
            }
            // alternatively I can spy on the database and mock it
            // jest.spyOn(repo, "save").mockImplementationOnce(() => {throw new Error()})
            const registerService = new RegisterVehicle(repo)
            const registered = await registerService.execute(vehicle)
            expect(registered.isRight()).toBe(true)
            // 
            
        })
    })
    
    describe.skip("UpdateVehicles", () => { })
    
    describe.skip("FetchVehicles", () => {})
})