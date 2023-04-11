import { z } from 'zod';
import { paginationFields } from '../../utils/zod';

export const query = z.object({
  ...paginationFields,
});

export const create = z.object({
  title: z.string(),
  description: z.string(),
  projectImageUrl: z.string(),
});

export const update = create.partial();
