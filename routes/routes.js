import express from 'express';
import userRoute from '../userCases/user.route.js';
import authRoute from '../authCases/auth.route.js';

const routes = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
*/


/**
 * @swagger
 * components:
 *   schemas:
 *     token:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Token para enviar al fronted
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *           example: olverarce01@gmail.com
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *           example: 'fifapes2016'
 *       example:
 *          email: olverarce01@gmail.com
 *          password: fifapes2016
 */


routes.get('/', (req, res)=>{
    res.json({
        doc: 'https://middlewareoveronce.vercel.app/api-docs'
    })
});

routes.use('/users', userRoute);
routes.use('/auth', authRoute);
export default routes;