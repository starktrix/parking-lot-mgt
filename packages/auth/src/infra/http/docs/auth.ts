const login = {
    // login should include cookies as part of response (refresn token)
  tags: ["Authentication"],
  description: "Log in users based on supplied email & password",
  operationId: "login",
  // parameters: [
  //   { name: "page", in: "query", description: "current page for retrieval" },
  //   { name: "limit", in: "query", description: "number for documents per page" },
  // ],

  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              example: "startrix@gmail.com",
            },
            password: {
              type: "string",
              example: "123456FQU",
            },
          },
        },
      },
    },
  },
  responses: {
    "200": {
      description: "login successful",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                example: true,
              },
              message: { type: "string", example: "login successful" },
              data: {
                type: "string",
                description: "jwt token",
                example: "efrj2JJJ.FJWEJWEJRF.RIUU",
              },
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

const register = {
  tags: ["Authentication"],
  description: "Registers new users based on supplied email & password",
  operationId: "register",

  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              example: "startrix@gmail.com",
            },
            password: {
              type: "string",
              example: "123456FQU",
            },
          },
        },
      },
    },
  },
  responses: {
    "200": {
      description: "login successful",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                example: true,
              },
              message: { type: "string", example: "login successful" },
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

const logout = {
    // should accept cookie and token as part of request
  tags: ["Authentication"],
  description: "Logout users",
    operationId: "logout",
    security: [
        {
          bearerAuth: [],
        },
      ],

  requestBody: {
    content: {
      "application/json": {},
    },
  },
  responses: {
    "200": {
      description: "logout successful",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              success: {
                type: "boolean",
                example: true,
              },
              message: { type: "string", example: "logout successful" },
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

export { login, register, logout };
