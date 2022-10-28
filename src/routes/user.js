import { Router } from 'express';
import UserController from '../controllers/userControllers';


const router = Router();

router.get('/login/:id', UserController.login);
router.post('/signup', UserController.signup);
router.get('/getAll', UserController.getAllUsers);
router.patch('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

export default router;
