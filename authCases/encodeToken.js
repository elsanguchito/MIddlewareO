import jwt from "jsonwebtoken";

function encodeToken(json, secret) {
  const token = jwt.sign(json, secret);
    return token;
  }

export default encodeToken;