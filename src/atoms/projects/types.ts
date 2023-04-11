import { z } from 'zod';
import * as schemas from './schemas';

export interface ProjectShape {
  id: number;
  title: string;
  description: string;
  projectImageUrl: string;
}

export type QuerySchema = z.infer<typeof schemas.query>;
export type CreateSchema = z.infer<typeof schemas.create>;
export type UpdateSchema = z.infer<typeof schemas.update>;
