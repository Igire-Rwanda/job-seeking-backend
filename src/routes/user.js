import { Router } from 'express';
import UserController from '../controllers/userControllers';
import { isUser } from '../middlewares/authorization';

const router = Router();

router.get('/:id', UserController.login);
router.post('/', UserController.signup);

//admin
router.get('/',isUser, UserController.getAllUsers);
router.patch('/:id',isUser, UserController.updateUser);
router.delete('/:id',isUser, UserController.deleteUser);

export default router;
