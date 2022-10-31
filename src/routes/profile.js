
import { Router } from 'express';
import profileController from '../controllers/profileControllers';



// router.route('/')
// .post(profileController.createprofile)
// .get(profileController.getOneprofile)


const router = Router();
router.post('/', profileController.createProfile);
router.get('/:id', profileController.getOneProfile);
router.patch('/:id', profileController.updateProfile);
router.delete('/:id', profileController.deleteProfile);
//admin
router.get('/', profileController.getAllProfiles);


export default router;