import { config } from "dotenv";

config()

const ENV = process.env.ENV || "development"

const envConfig = {
    development: {
        PORT: process.env.DEV_PORT || 5001

    },
    production: {
        PORT: process.env.PORT || 5001

    }
}

// console.log(envConfig)
export default envConfig[ENV]