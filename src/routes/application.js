import { Router } from 'express';
import applicationController from '../controllers/applicationControllers';
import { verifyUserToken } from "../middlewares/verifyToken";
import verifyAccess from '../middlewares/verifyAccess';




// router.route('/')
// .post(applicationController.createApplication)
// .get(applicationController.getOneApplication)


const router = Router();
router.use(verifyUserToken);
router.post('/',verifyAccess("Talent"), applicationController.createApplication);
router.get('/:id', applicationController.getOneApplication);
router.get('/', applicationController.getAllApplications);
router.patch('/:id', applicationController.updateApplication);
router.delete('/:id', applicationController.deleteApplication);

export default router;