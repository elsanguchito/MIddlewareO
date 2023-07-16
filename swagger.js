import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Overonce API', 
            description: 'Esta es una aplicación creada en Express y Documentada en Swagger',
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Overonce",
                url: "https://overonce.com/",
                email: "overonce@gmail.com",
            },
            version: '0.1.0'
        },
    },
    apis: ["./routes/*.js", './authCases/**/*.js', './userCases/**/*.js'],
};

const specs = swaggerJSDoc(options);

export default specs;