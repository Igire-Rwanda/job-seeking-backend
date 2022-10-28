import { Router } from 'express';
import userRouter from './user';
import jobRouter from './job';


const router = Router();

router.use('/user', userRouter);
router.use('/job', jobRouter);
export default router;
