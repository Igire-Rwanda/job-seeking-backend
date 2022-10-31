import { Router } from 'express';
import jobController from '../controllers/jobControllers';



// router.route('/')
// .post(jobController.createJob)
// .get(jobController.getOneJob)


const router = Router();
router.post('/', jobController.createJob);
router.get('/:id', jobController.getOneJob);
router.get('/', jobController.getAllJobs);
router.patch('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

export default router;