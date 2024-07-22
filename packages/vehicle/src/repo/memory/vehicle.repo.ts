import util from "util";

import { None, Option, Some } from "../../../../shared/core/option";
import { VehicleMapper } from "../../mappers/vehicleMap";
import { Vehicle } from "../../subdomain/entities/vehicle";
import { IVehicleRepository } from "../vehicle.repo.port";
import { LicenseNumber } from "../../subdomain/valueobjects/licenseNumber";

export class VehicleMemoryRepository implements IVehicleRepository {
  private db: any;

  constructor(model?: unknown) {
    this.db = model
  }

  async save(vehicle: Vehicle) {
    // can opt to throw error or handle db error
    // since database error can be more nuanced, just throw
    // a simple error with message and capture the error in the stack
    // for telemetry, this way it won't be exposed to users
    // throw new Error("Method not implemented.");
    const _vehicle = VehicleMapper().toPersistence(vehicle);
    // this.db.insert(_vehicle, (err, newDoc) => {
    //   if (err) console.error(err)
    //   console.log("NEW DOC: ")
    //   console.log(newDoc)
    //   throw err
    // })

    let db = util.promisify(this.db.insert);
    db = db.bind(this.db);

    try {
      const newDoc = await db(_vehicle);
      console.log("NEW DOC: ");
      console.log(newDoc);
    } catch (error) {
      throw error;
    }
    return;
  }

  async delete(id: string) {
    throw new Error("Method not implemented.");
  }

  async getVehicleById(id: string): Promise<Option<Vehicle>> {
    let db = util.promisify(this.db.find);
    db = db.bind(this.db);

    try {
      const doc = await db({ _id: id });
      console.log(doc);

      if (!doc || doc.length <= 0) {
        return None();
      }

      return Some(VehicleMapper().toDomain(doc[0]));
    } catch (error) {
      throw error;
    }
  }

  async getVehicleByLicenseNumber(
    licenseNumber: string
  ): Promise<Option<Vehicle>> {
    let db = util.promisify(this.db.find);
    db = db.bind(this.db);

    try {
      const doc = await db({ license_number: licenseNumber });
      console.log(doc);

      if (!doc || doc.length <= 0) {
        return None();
      }

      return Some(VehicleMapper().toDomain(doc[0]));
    } catch (error) {
      throw error;
    }
  }

  // https://www.phind.com/search?cache=oaqk4xwdkmpyfvhsgb0d55l6
  async getVehicles(options: Record<string, any>): Promise<Option<Vehicle[]>> {
    return new Promise((resolve, reject) => {
      this.db.find({})
        // .sort({})
        .skip(options.offset)
        .limit(options.limit)
        .exec(function (err, docs) {
          if (err) {
            reject(err);
          } else {
            if (!docs || docs.length <= 0) {
              resolve(None()); // Assuming None() returns a rejected promise or a suitable placeholder
            } else {
              // Convert to DTO directly
              const vehicles = docs.map((d) => VehicleMapper().toDomain(d));
              resolve(Some(vehicles)); // Assuming Some() wraps the result in a resolved promise
            }
          }
        });
    });


    // return this.db
    //   .find({})
    //   .sort({ planet: 1 })
    //   .skip(1)
    //   .limit(options.limit)
    //   .exec(function (err, docs) {
    //     if (err) {
    //       throw err;
    //     }

    //     if (!docs || docs.length <= 0) {
    //       return None();
    //     }
    //     // skip this and convert to dto directly
    //     return Some(docs.map((d) => VehicleMapper().toDomain(d)));
    //   });



    // let db = util.promisify(_db.exec);
    // db = db.bind(this.db.exec);
    // // let db_query = {} as Record<any, any>;

    // try {
    //   console.log(options)
    //   let docs = db();
    //   docs = await docs
    //   console.log(docs);

    //   if (!docs || docs.length <= 0) {
    //     return None();
    //   }
    //   // skip this and convert to dto directly
    //   return Some(docs.map((d) => VehicleMapper().toDomain(d)));
    // } catch (error) {
    //   console.log(error)
    //   throw error;

    // }
  }
}
