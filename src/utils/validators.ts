interface TutorialErrors {
  title?: string;
  description?: string;
  published?: boolean;
}

export const tutorialTitleError = (title: string) => {
  if (!title || title.trim() === '') {
    return 'the tutorial title must not be empty';
  }
  if (title && title.length > 60) {
    return 'the tutorial title must not be more than 60 characters';
  }
};

export const tutorialDescriptionError = (title: string) => {
  if (!title || title.trim() === '') {
    return 'the tutorial description must not be empty';
  }
  if (title && title.length > 60) {
    return 'the tutorial description must not be more than 60 characters';
  }
};

export const tutorialValidator = (
  title: string,
  description: string,
  published: boolean
) => {
  const errors: TutorialErrors = {};

  const titleError = tutorialTitleError(title);
  const descriptionError = tutorialDescriptionError(description);

  if (titleError) {
    errors.title = titleError;
  }

  if (descriptionError) {
    errors.description = descriptionError;
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
