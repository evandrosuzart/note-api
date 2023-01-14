const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '0.0.1',      // by default: '1.0.0'
    title: 'Api de estudo',        // by default: 'REST API'
    description: 'Api com a intenção de armazernar anotações e títulos para consumo em frontend',  // by default: ''
  },
  host: 'localhost:3001/api',      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: [],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: '',         // Tag name
      description: '',  // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object (Swagger 2.0)
  components: {}            // by default: empty object (OpenAPI 3.x)
};

const endpointsFiles = ['./src/routes/Routes.js'];
const outputFile = './swagger-output.json';

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);