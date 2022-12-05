import { Router } from 'express';
import userControllers from '../controllers/userControllers';
import { checkUser, loginUser } from "../middlewares/checkUserExist";
import { verifyUserToken } from "../middlewares/verifyToken";
import verifyAccess from '../middlewares/verifyAccess';


const route = Router();



route 
 .route("/")
 .post(checkUser, userControllers.signup);


//  .get(userControllers.login);
route.post("/login", loginUser);
 route.use(verifyUserToken);
route
.route("/")
.get(verifyAccess("Client"),userControllers.getAllUsers);

route
 .route("/:id")
 .patch(userControllers.updateUser)
 .delete(verifyAccess("Admin"),userControllers.deleteUser)
 .get(verifyAccess("Admin,Client"),userControllers.getOne);

export default route;
