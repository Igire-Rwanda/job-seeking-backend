import userModel from "../models/userModel";
import handleCRUD from "../utils/handleCRUD";
import sendEmail from '../utils/sendEmail';

 const signup= handleCRUD.createOne(userModel);
 const getOne = handleCRUD.getOneById(userModel);
 const getAllUsers = handleCRUD.getAll(userModel);
 const updateUser = handleCRUD.updateOneById (userModel);
 const deleteUser = handleCRUD.deleteOneById(userModel);

 
 export default {signup,getOne,getAllUsers,deleteUser,updateUser}
