import applicationModel from "../models/application";
import handleCRUD from "../utils/handleCRUD";

 const createApplication = handleCRUD.createOne(applicationModel);
 const getOneApplication = handleCRUD.getOneById(applicationModel);
 const getAllApplications = handleCRUD.getAll(applicationModel);
 const updateApplication = handleCRUD.updateOneById(applicationModel);
 const deleteApplication = handleCRUD.deleteOneById(applicationModel);

 export default {createApplication,getOneApplication,getAllApplications,updateApplication,deleteApplication}