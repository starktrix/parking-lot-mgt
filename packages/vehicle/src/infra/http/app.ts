import cookieParser from "cookie-parser"
import express from "express"
import { vehicleRouterV1 } from "./api"
import { HTTP_STATUS } from "../../../../shared/infra/http/http-status"



const app = express()

// set up middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))


app.use("/v1", vehicleRouterV1)

app.use("*", (req, res) => {
    res.status(HTTP_STATUS.NOT_IMPLEMENTED).json({
        message: `${req.method} for ${req.baseUrl} not implemented`
    })
})

export default app;