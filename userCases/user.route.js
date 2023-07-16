import express from 'express';
import getUsers from './getUsers/getUsers.js';
import postUser from './postUser/postUser.js';

const userRoute = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */
userRoute.use('/:user/profiles', userRoute);
userRoute.get('/', getUsers);

export default userRoute;