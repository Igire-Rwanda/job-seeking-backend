import categoryModel from "../models/categoryPostModel";
import handleCRUD from "../utils/handleCRUD";

 const createCategory = handleCRUD.createOne(categoryModel);
 const getOneCategory = handleCRUD.getOneById(categoryModel);
 const getAllCategories = handleCRUD.getAll(categoryModel);
 const updateCategory = handleCRUD.updateOneById(categoryModel);
 const deleteCategory = handleCRUD.deleteOneById(categoryModel);

 export default {createCategory,getOneCategory,getAllCategories,updateCategory,deleteCategory}