import jobModel from "../models/jobPostModel";
import handleCRUD from "../utils/handleCRUD";

 const createJob = handleCRUD.createOne(jobModel);
 const getOneJob = handleCRUD.getOneById(jobModel);
 const getAllJobs = handleCRUD.getAll(jobModel);
 const updateJob = handleCRUD.updateOneById(jobModel);
 const deleteJob = handleCRUD.deleteOneById(jobModel);

 export default {createJob,getOneJob,getAllJobs,updateJob,deleteJob}