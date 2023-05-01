import jwt, { SignOptions } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;
if (!JWT_SECRET) throw new Error('JWT_SECRET undefined');

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1 day',
};

const genToken = (user: string, id: number): string => {
  const payload = {
    username: user,
    id,
  };
  const token:string = jwt.sign(payload, JWT_SECRET, options);
  return token;
};

// const checkToken = (token: object) => 
//   jwt.verify(token, JWT_SECRET);

export default { genToken };