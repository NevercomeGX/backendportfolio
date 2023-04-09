import type { Handler } from 'express';
import * as services from './services';
import { SimpleError } from '../../utils/errors';

export const getObject: Handler = async (req, res, next) => {
  const language = await services._getLanguageById(req.params.id);

  // Ownership validation should be here

  if (!language) {
    throw new SimpleError(404, req.t('notFound'));
  }

  req.object = language;
  return next();
};
