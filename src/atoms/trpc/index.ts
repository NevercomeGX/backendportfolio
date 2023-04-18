import express from "express";
import morgan from "morgan";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { PrismaClient } from "@prisma/client";
import {
  createEmailSchema,
  filterQuery,
  params,
  updateEmailSchema,
} from "./emails/email.schema";
import {
  createNoteController,
  deleteNoteController,
  findAllNotesController,
  findNoteController,
  updateNoteController,
} from "./emails/emails.controller";

export const prisma = new PrismaClient();
const t = initTRPC.create();


const appRouter = t.router({
  getHello: t.procedure.query((req) => {
    return { message: "Welcome to Full-Stack tRPC CRUD App" };
  }),
  createNote: t.procedure
    .input(createEmailSchema)
    .mutation(({ input }) => createNoteController({ input })),
  updateNote: t.procedure
    .input(updateEmailSchema)
    .mutation(({ input }) =>
      updateNoteController({ paramsInput: input.params, input: input.body })
    ),
  deleteNote: t.procedure
    .input(params)
    .mutation(({ input }) => deleteNoteController({ paramsInput: input })),
  getNote: t.procedure
    .input(params)
    .query(({ input }) => findNoteController({ paramsInput: input })),
  getNotes: t.procedure
    .input(filterQuery)
    .query(({ input }) => findAllNotesController({ filterQuery: input })),
});

export type AppRouter = typeof appRouter;
export const trpcRouter  = appRouter

const app = express();
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));