import { Request, Response, NextFunction } from 'express';
import HttpError from '../utils/httpError';

interface AuthRequest extends Request {
  tokenPayload?: {
    id: string;
    tokenType: string;
    iat: number;
    exp: number;
    role: string;
  };
}

const permit = (allowedRoles: string[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { tokenPayload } = req;

    if (!tokenPayload) {
      return next(
        new HttpError({
          title: 'unauthorized',
          detail: 'Authentication token not provided',
          code: 401,
        })
      );
    }

    const { role } = tokenPayload;

    if (allowedRoles.includes(role)) {
      next();
    } else {
      next(
        new HttpError({
          title: 'forbidden',
          detail: 'Access Forbidden',
          code: 403,
        })
      );
    }

    // add a return statement at the end of the function
    return undefined;
  };
};

export default permit;
