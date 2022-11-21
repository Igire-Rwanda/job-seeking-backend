import { Router } from 'express';
import userControllers from '../controllers/userControllers';
import { checkUser, loginUser } from "../middlewares/checkUserExist";
// import { verifyUserToken } from "../middlewares/verifyToken";


const route = Router();


route.get("/login", loginUser);
route 
 .route("/")
 .post(checkUser, userControllers.signup)
 .get(userControllers.getAllUsers)

 .get(userControllers.login);
//  route.use(verifyUserToken);


route
 .route("/:id")
 .patch(userControllers.updateUser)
 .delete(userControllers.deleteUser);

export default route;
