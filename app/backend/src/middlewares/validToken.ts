import { NextFunction, Request, Response } from 'express';
import jwt from '../utils/jwt';

const validToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const tokenAuth = authorization.split(' ')[1];
    const data = jwt.verify(tokenAuth);
    req.body.user = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validToken;
