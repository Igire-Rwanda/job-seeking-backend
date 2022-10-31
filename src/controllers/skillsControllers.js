import skillsModel from "../models/skillsModel";
import handleCRUD from "../utils/handleCRUD";

 const createSkills = handleCRUD.createOne(skillsModel);
 const getOneSkills = handleCRUD.getOneById(skillsModel);
 const getAllSkills = handleCRUD.getAll(skillsModel);
 const updateSkills = handleCRUD.updateOneById(skillsModel);
 const deleteSkills = handleCRUD.deleteOneById(skillsModel);

 export default {createSkills,getOneSkills,getAllSkills,updateSkills,deleteSkills}