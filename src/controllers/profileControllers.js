import profileModel from "../models/profileModel";
import handleCRUD from "../utils/handleCRUD";

 const createProfile = handleCRUD.createOne(profileModel);
 const getOneProfile = handleCRUD.getOneById(profileModel);
 const getAllProfiles = handleCRUD.getAll(profileModel);
 const updateProfile = handleCRUD.updateOneById(profileModel);
 const deleteProfile = handleCRUD.deleteOneById(profileModel);

 export default {createProfile,getOneProfile,getAllProfiles,updateProfile,deleteProfile}