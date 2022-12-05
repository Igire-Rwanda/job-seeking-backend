
import { Router } from 'express';
import profileController from '../controllers/profileControllers';
import { verifyUserToken } from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess"



// router.route('/')
// .post(profileController.createprofile)
// .get(profileController.getOneprofile)


const route = Router();
route.use(verifyUserToken);
route
.route("/")
.post(profileController.createProfile)
.get(profileController.getAllProfiles)


route
.route("/:id")
.get(verifyAccess("Client, Admin"),profileController.getOneProfile)
.patch( profileController.updateProfile)
.delete(verifyAccess("Client"), profileController.deleteProfile);



export default route;