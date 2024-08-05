import express from "express";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { HTTP_STATUS } from "../../../../shared/infra/http/http-status";
import { authRouter } from "./api";

// import swaggerSpec from "./docs";


const app = express();

// set up middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// docs endpoints
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {explorer: true}));
     
// application routes
app.use("/api/v1", authRouter);

app.use("*", (req, res) => {
  res.status(HTTP_STATUS.NOT_IMPLEMENTED).json({
    message: `${req.method} for ${req.baseUrl} not implemented`,
  });
});

export default app;
