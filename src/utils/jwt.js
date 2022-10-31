import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();
export const sign = (jobPost) => jwt.sign(jobPost, process.env.JWT_LOGIN_SECRET, { expiresIn: '16h' });
export const verify = (jobPost) => jwt.verify(jobPost, process.env.JWT_LOGIN_SECRET);