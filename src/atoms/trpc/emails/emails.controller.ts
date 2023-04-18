import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import {
  CreateEmailInput,
  FilterQueryInput,
  ParamsInput,
UpdateEmailInput} from "./email.schema";

export const createNoteController = async ({
  input,
}: {
  input: CreateEmailInput;
}) => {
  try {
    const note = await prisma.emails.create({
      data: {
        name: input.name,
        email: input.email,
        message: input.message,
      },
    });

    return {
      status: "success",
      data: {
        note,
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email with that title already exists",
        });
      }
    }
    throw error;
  }
};

export const updateNoteController = async ({
  paramsInput,
  input,
}: {
  paramsInput: ParamsInput;
  input: UpdateEmailInput["body"];
}) => {
  try {
    const updatedNote = await prisma.emails.update({
      where: { id: paramsInput.id.toString() }, // Convierte a string
      data: input,
    });
  

    return {
      status: "success",
      note: updatedNote,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email with that title already exists",
        });
      }
    }
    throw error;
  }
};

export const findNoteController = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput;
}) => {
  const note = await prisma.emails.findFirst({
    where: { id: paramsInput.id.toString() },
  });

  if (!note) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Email with that ID not found",
    });
  }

  return {
    status: "success",
    note,
  };
};


export const findAllNotesController = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput;
}) => {
  const page = filterQuery.page || 1;
  const limit = filterQuery.limit || 10;
  const skip = (page - 1) * limit;

  const emails = await prisma.emails.findMany({ skip, take: limit });

  return {
    status: "success",
    results: emails.length,
    emails,
  };
};

export const deleteNoteController = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput;
}) => {
  try {
    await prisma.emails.delete({ where: { id: paramsInput.id.toString() } });

    return {
      status: "success",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Email with that ID not found",
        });
      }
    }
    throw error;
  }
};