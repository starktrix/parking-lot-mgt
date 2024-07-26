const fetchVehicles = {
  tags: ["Vehicles"],
  description: "fetch all vehicles based on query params",
  operationId: "fetchVehicles",
  parameters: [
    { name: "page", in: "query", description: "current page for retrieval" },
    { name: "limit", in: "query", description: "number for documents per page" },
    // { name: "id", in: "params", description: "vehicle Id" },
  ],

  requestBody: {
    content: {
      "application/json": {},
    },
  },
  responses: {
    "200": {
      description: "vehicle(s) found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              id: {
                type: "string",
                example: "1",
              },
              licenseNumber: { type: "string", example: "ABC123" },
              ownerId: { type: "string", example: "O001" },
              vehicleType: { type: "string", example: "Sedan" },
            },
          },
        },
      },
    },

    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};


export {fetchVehicles}