import { Router } from 'express';
import UserController from '../controllers/userControllers';
import { isUser } from '../middlewares/authorization';
import {checkUser, loginUser} from "../middlewares/checkUserExist"
const router = Router();


router.post('/', checkUser,loginUser, UserController.signup);
router.get('/:id', UserController.login);
//admin
router.get('/',isUser, UserController.getAllUsers);
router.patch('/:id',isUser, UserController.updateUser);
router.delete('/:id',isUser, UserController.deleteUser);

export default router;
