import * as express from 'express';
import {
  createTutorial,
  deleteTutorial,
  findTutorialByTitle,
  getAllTutorials,
  getTutorial,
  updateTutorial
} from '../controllers/tutorial';

const router = express.Router();

router.route(['/title/:tutorialTitle', '/title/']).get(findTutorialByTitle);

router.route('/').get(getAllTutorials).post(createTutorial);

router
  .route('/:tutorialId')
  .get(getTutorial)
  .put(updateTutorial)
  .delete(deleteTutorial);

export default router;
