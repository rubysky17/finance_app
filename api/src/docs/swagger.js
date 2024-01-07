const swaggerJsDoc = require('swagger-jsdoc');

/**
 * Chỉ Hiển thị docs API trên local
 * Hiện tại chưa deploy nên việc setup trên 1 url khác là chưa thực hiện
 */
const { PORT } = require("../configs/config.mongodb");

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Finace application',
            version: '1.0.0',
            description: 'Finnace API documents',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./routes/*.js'],
}


const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs } 