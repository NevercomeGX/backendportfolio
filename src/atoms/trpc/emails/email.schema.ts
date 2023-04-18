import { z } from "zod";

export const createEmailSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  message: z.string({ required_error: "Message is required",}),
});

export const params = z.object({
  id: z.number(),
});

export const updateEmailSchema = z.object({
  params,
  body: z
    .object({
      name: z.string(),
      email: z.string(),
      message: z.string(),
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsInput = z.TypeOf<typeof params>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateEmailInput = z.TypeOf<typeof createEmailSchema>;
export type UpdateEmailInput = z.TypeOf<typeof updateEmailSchema>;