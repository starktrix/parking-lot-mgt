import Datastore from "nedb"
import util from "util"
import vehicles from "./vehicles"

const db = new Datastore({ filename: "./src/repo/memory/vehicles.db", autoload: true })

console.log(" ==== seeding In-memory database ====")

db.insert(vehicles, (err, _) => {
    if (err) {
        console.warn("In-memory database seeding error")
        console.error(err)
    }
    console.log("In-memory database seeded")
})