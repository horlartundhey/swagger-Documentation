const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      description: 'Swagger Tutorial for API',
      version: '1.0.0',
    },
   
  },
  apis: ['./routes/taskRoutes.js'], // Path to your routes files
};

const swaggerSpec = swaggerJSdoc(options);

module.exports = { swaggerSpec, swaggerUi };
