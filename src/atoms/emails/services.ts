import { Prisma, Emails } from '@prisma/client';
import type { emailshape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape({ id, name, message, email }: Emails): emailshape {
  return { id, name, message, email };
}
export function shapeNullable(emails: Emails | null): emailshape | null {
  return emails ? shape(emails) : null;
}

export async function _getEmailsById(id: string): Promise<Emails | null> {
  const emails = await prisma.emails.findUnique({ where: { id } });

  return emails;
}

export async function findEmailsById(id: string): Promise<emailshape | null> {
  const emails = await prisma.emails.findUnique({ where: { id } });

  return shapeNullable(emails);
}

export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<emailshape>> {
  const where: Prisma.EmailsWhereInput = {};

  try {
    const count = await prisma.emails.count({ where });
    const { offset, info } = getPagination(count, query);

    const emails = await prisma.emails.findMany({
      ...offset,
      where,
    });

    return {
      ...info,
      data: emails.map(shape),
    };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch emails');
  }
}
export async function create(data: CreateSchema): Promise<emailshape> {
  if (!data.name || !data.message || !data.email) {
    throw new Error('Invalid input data');
  }

  const emails = await prisma.emails.create({ data });

  return shape(emails);
}

export async function update(id: string, data: UpdateSchema): Promise<emailshape | null> {
  const emails = await prisma.emails.update({ where: { id }, data });

  return shapeNullable(emails);
}

export async function destroy(id: string): Promise<void> {
  await prisma.emails.delete({ where: { id } });
}
