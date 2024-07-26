import { createUser, createUserBody } from "./example";
import { fetchVehicles } from "./vehicle";

const definition = {
  openapi: "3.0.0",
  info: {
    title: "Starktrix Inc. Parking Lot Management System",
    description: "API endpoints for plms documented using openapi specs",
    contact: {
      name: "Inventor Stark",
      email: "info@mstarktrix.com",
      url: "https://github.com/starktrix/parking-lot-mgt",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1/",
      description: "Local server",
    },
    {
      url: "<your live url here>",
      description: "Live server",
    },
  ],
  tags: [{ name: "Vehicles" }],

  // #############################################
  // ################  PATH ######################
  paths: {
    // users: {
    //   post: createUser,
    //   },
      "/vehicles": {
          get: fetchVehicles
      }
  },

  // #############################################
  // ################  COMPONENT #################
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      },
    //   ############### SCHEMA ##################
    schemas: {
    //   createUserBody,
    },
  },
};

export default definition;
