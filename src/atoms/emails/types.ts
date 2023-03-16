import { z } from 'zod';
import * as schemas from './schemas';

export interface emailshape {
  id: string;
  name: string;
  message: string;
  email: string;
}

export type QuerySchema = z.infer<typeof schemas.query>;
export type CreateSchema = z.infer<typeof schemas.create>;
export type UpdateSchema = z.infer<typeof schemas.update>;
