import { Router } from 'express';
import userRouter from './user';
import jobRouter from './job';
import profileRouter from "./profile";
import applicationRouter from "./application";
import skillsRouter from "./skills";
import categoryRouter from "./category";
const router = Router();

router.use('/user', userRouter);
router.use('/job', jobRouter);
router.use('/profile', profileRouter);
router.use('/application', applicationRouter);
router.use('/category', categoryRouter);
router.use('/skills', skillsRouter);
export default router;
