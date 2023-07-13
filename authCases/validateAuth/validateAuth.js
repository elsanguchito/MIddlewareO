import { body, validationResult } from "express-validator";
import validateToken from "../validateToken/validateToken.js";

const validateAuth = [
    validateToken,
    body('email').isEmail().withMessage('El correo electrónico no es válido'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]

export default validateAuth;