import jwt from 'jsonwebtoken';

function decodeToken(token, secret) {
      const decoded = jwt.verify(token, secret);
      return decoded;
  }
export default decodeToken;  