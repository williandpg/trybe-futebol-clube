import { NextFunction, Request, Response } from 'express';

const validLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const passwordLength = password.length >= 6;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!regex.test(email) || !password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (!passwordLength) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

export default validLogin;
