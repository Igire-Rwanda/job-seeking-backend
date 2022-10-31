import { Router } from 'express';
import UserController from '../controllers/userControllers';


const router = Router();

router.get('/:id', UserController.login);
router.post('/', UserController.signup);

//admin
router.get('/', UserController.getAllUsers);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
