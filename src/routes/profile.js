
import { Router } from 'express';
import profileController from '../controllers/profileControllers';
import { verifyUserToken } from "../middlewares/verifyToken";



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
.get(profileController.getOneProfile)
.patch( profileController.updateProfile)
.delete( profileController.deleteProfile);



export default route;