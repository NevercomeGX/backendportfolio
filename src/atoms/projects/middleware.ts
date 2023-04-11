import type { Handler } from 'express';
import * as services from './services';
import { SimpleError } from '../../utils/errors';

export const getObject: Handler = async (req, res, next) => {
  const projectId = parseInt(req.params.id, 10);
  const project = await services._getProjectById(projectId);

  // Ownership validation should be here

  if (!project) {
    throw new SimpleError(404, req.t('notFound'));
  }

  req.object = project;
  return next();
};
