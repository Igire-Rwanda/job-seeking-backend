import { Router } from 'express';
import applicationController from '../controllers/applicationControllers';




// router.route('/')
// .post(applicationController.createApplication)
// .get(applicationController.getOneApplication)


const router = Router();
router.post('/', applicationController.createApplication);
router.get('/:id', applicationController.getOneApplication);
router.get('/', applicationController.getAllApplications);
router.patch('/:id', applicationController.updateApplication);
router.delete('/:id', applicationController.deleteApplication);

export default router;