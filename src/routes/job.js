import { Router } from 'express';
import jobController from '../controllers/jobControllers';
import { verifyUserToken } from "../middlewares/verifyToken";
import verifyAccess from '../middlewares/verifyAccess';



// router.route('/')
// .post(jobController.createprofile)
// .get(jobController.getOneprofile)


const route = Router();
route.get("/",jobController.getAllJobs);
route.use(verifyUserToken);
route
.route("/")
.post(verifyAccess("Client"),jobController.createJob);



route
.route("/:id")
.get(jobController.getOneJob)
.patch(verifyAccess("Client"), jobController.updateJob)
.delete( verifyAccess("Admin"),jobController.deleteJob);



export default route;