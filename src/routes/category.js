import { Router } from 'express';
import categoryController from '../controllers/categoryControllers';



// router.route('/')
// .post(categoryController.createCategory)
// .get(categoryController.getOneCategory)


const router = Router();
router.post('/', categoryController.createCategory);
router.get('/:id', categoryController.getOneCategory);
router.get('/', categoryController.getAllCategories);
router.patch('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

export default router;