import express from 'express';
const routes = express.Router();
import userRoute from './userCases/user.route.js';
import signin from './authCases/signin/signin.js';
import signup from './authCases/signup/signup.js';
import getToken from './authCases/getToken.js';
import validateAuth from './authCases/validateAuth/validateAuth.js';

routes.use('/users', validateAuth, signin, userRoute);
routes.post('/signup', validateAuth, signup);
routes.get('/token', getToken);
routes.get('/', (req, res)=>{res.json({message: 'hello world'})});
export default routes;