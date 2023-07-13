import encodeToken from "./encodeToken.js";

const getToken = (req, res) =>{
    const {email, password} = req.body;
    const secret = process.env.SECRET_PASSWORD;  
    const token = encodeToken({email, password}, secret);
    res.json({token});
}
export default getToken;