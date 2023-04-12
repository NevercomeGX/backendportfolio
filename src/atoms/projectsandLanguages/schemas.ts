import { z } from 'zod';
import { paginationFields } from '../../utils/zod';

export const query = z.object({
  ...paginationFields,
});

export const create = z.object({
  projectId: z.number(),
  languageId: z.number(),
  assignedBy: z.string(),
});

export const update = create.partial();