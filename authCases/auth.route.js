import express from 'express';
import validateAuth from '../authCases/validateAuth/validateAuth.js';
import signin from '../authCases/signin/signin.js';
import signup from '../authCases/signup/signup.js';
import signinGoogle from '../authCases/signinGoogle/signinGoogle.js';
import postToken from '../authCases/postToken.js';
import googlecallback from './googlecallback/googlecallback.js';

const authRoute = express.Router();


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gestión de Autenticación
 */


/**
 * @swagger
 * /auth/token:
 *   post:
 *     summary: Generar JWT Token Usuario
 *     tags: [Auth]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: (devuelve email y password dentro de un token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/token'
 */

authRoute.post('/token', postToken);


/**
 * @swagger
 * /auth/signinWithGoogle:
 *   post:
 *     summary: Inicia sesión con google
 *     tags: [Auth]
 *     responses:
 *       200:
 *          description: (devuelve url para iniciar sesión con google)
 *          content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    url:
 *                      type: string
 *                      description: URL de inicio de sesión de Google
 *                      example: "https://crutastronwxvgysuejl.supabase.co/auth/v1/authorize?provider=google"
*/

authRoute.post('/signinWithGoogle', signinGoogle);

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Devolución de la llamada del inicio de google
 *     tags: [Auth]
 *     responses:
 *       200:
 *          description: (devuelve datos de usuario)
 */
authRoute.get('/google/callback/#:access_token', googlecallback);

/**
 * @swagger
 * /auth/signinWithEmail:
 *   post:
 *     summary: Inicia sesión al usuario
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: (devuelve access_token dentro de un token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/token'
 *       400:
 *         description: Formato Email password inválidos
 *       401:
 *         description: Token inválido
*/

authRoute.post('/signinWithEmail', validateAuth, signin);

/**
* @swagger
* /auth/signupWithEmail:
*   post:
*     summary: Registrar al usuario
*     tags: [Auth]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: El usuario se registró con exito
 *       500:
 *         description: Error guardando datos
 *       401:
 *         description: Token inválido
*/

authRoute.post('/signupWithEmail', validateAuth, signup);


export default authRoute;