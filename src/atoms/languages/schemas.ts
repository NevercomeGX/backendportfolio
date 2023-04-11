import { z } from 'zod';
import { paginationFields } from '../../utils/zod';

export const query = z.object({
  ...paginationFields,
});

export const create = z.object({
  id: z.number(),
  lenguague: z.string(),
  languageImageUrl: z.string(),
});

export const update = create.partial();
