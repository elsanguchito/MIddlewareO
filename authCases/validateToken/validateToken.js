import decodeToken from "../decodeToken.js";

const validateToken = (req, res, next) => {
    const secret = process.env.SECRET_PASSWORD;
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({message: 'No se proporciono el token'});
    }

    try {
    const decoded = decodeToken(token, secret);
    req.body = decoded;
    next();
    } catch (error) {
    // En caso de que ocurra un error en la decodificación
    console.error('Error al decodificar el token:', error);
    return res.status(401).json({message: 'El token es inválido'});
  }
}
export default validateToken;