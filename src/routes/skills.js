import { Router } from 'express';
import skillsController from '../controllers/skillsControllers';



// router.route('/')
// .post(skillsController.createSkills)
// .get(skillsController.getOneSkills)


const router = Router();
router.post('/', skillsController.createSkills);
router.get('/:id', skillsController.getOneSkills);
router.get('/', skillsController.getAllSkills);
router.patch('/:id', skillsController.updateSkills);
router.delete('/:id', skillsController.deleteSkills);

export default router;