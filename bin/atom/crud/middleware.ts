import { Request, Response, NextFunction } from 'express';
import { SimpleError } from '../../../src/utils/errors';
import * as services from './services';

interface ObjectRequest extends Request {
  object?: any;
  t?: any;
}

export const getObject = async (
  req: ObjectRequest,
  res: Response,
  next: NextFunction
) => {
  const _object = await services._get_ObjectById(req.params.id);

  // Ownership validation should be here

  if (!_object) {
    throw new SimpleError(404, req.t('notFound'));
  }

  req.object = _object;
  return next();
};
