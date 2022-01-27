import { Request, Response } from 'express';
import { Tutorial } from '../entity/Tutorial';
import { tutorialTitleError, tutorialValidator } from '../utils/validators';

export const getAllTutorials = async (req: Request, res: Response) => {
  const tutorials = await Tutorial.find();

  res.status(200).json(tutorials);
};

export const getTutorial = async (req: Request, res: Response) => {
  const { tutorialId } = req.params;

  const tutorialIdInt = Number(tutorialId);

  const targetTutorial = await Tutorial.find({ id: tutorialIdInt });

  if (!targetTutorial) {
    return res.status(400).send({ message: 'Invalid tutorial ID' });
  }

  res.status(200).json(targetTutorial);
};

export const createTutorial = async (req: Request, res: Response) => {
  const { title, description, published } = req.body;

  const { valid, errors } = tutorialValidator(title, description, published);

  if (!valid) {
    return res.status(400).send({ message: Object.values(errors) });
  }

  const newTutorial = Tutorial.create({
    title,
    description,
    published
  });

  await newTutorial.save();

  return res.status(201).json(newTutorial);
};

export const updateTutorial = async (req: Request, res: Response) => {
  const { title, description, published } = req.body;
  const { tutorialId } = req.params;

  const tutorialIdInt = Number(tutorialId);

  const { valid, errors } = tutorialValidator(title, description, published);

  if (!valid) {
    return res.status(400).json(Object.values(errors));
  }

  const targetTutorial = await Tutorial.findOne({ id: tutorialIdInt });

  if (!targetTutorial) {
    return res.status(404).send({ message: 'Invalid tutorial ID' });
  }

  targetTutorial.title = title;
  targetTutorial.description = description;
  targetTutorial.published = published;

  await targetTutorial.save();
  res.status(200).json(targetTutorial);
};

export const deleteTutorial = async (req: Request, res: Response) => {
  const { tutorialId } = req.params;

  const tutorialIdInt = Number(tutorialId);

  const targetTutorial = await Tutorial.findOne({ id: tutorialIdInt });

  if (!targetTutorial) {
    return res.status(404).send({ message: 'Invalid tutorial ID' });
  }

  await targetTutorial.remove();
  res.status(204).end();
};

export const findTutorialByTitle = async (req: Request, res: Response) => {
  console.log('opppppaa');
  const { tutorialTitle } = req.params;
  console.log(tutorialTitle);

  const titleError = await tutorialTitleError(tutorialTitle);
  console.log(titleError);
  if (titleError) {
    return res.status(400).json({ message: titleError });
  }

  const tutorials = await Tutorial.createQueryBuilder('tutorial')
    .where(`tutorial.title like '%' || :title || '%'`, { title: tutorialTitle })
    .getMany();

  res.status(200).json(tutorials);
};
