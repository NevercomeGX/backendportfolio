import { Prisma, Languages } from '@prisma/client';
import type { LanguageShape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape(language: Languages): LanguageShape {
  return { ...language };
}

export function shapeNullable(language: Languages | null): LanguageShape | null {
  return language ? shape(language) : null;
}

export async function _getLanguageById(id: number): Promise<Languages | null> {
  const language = await prisma.languages.findUnique({ where: { id } });

  return language;
}

export async function findLanguageById(id: number): Promise<LanguageShape | null> {
  const language = await prisma.languages.findUnique({ where: { id } });

  return shapeNullable(language);
}

export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<LanguageShape>> {
  const where: Prisma.LanguagesWhereInput = {};

  const count = await prisma.languages.count({ where });
  const { offset, info } = getPagination(count, query);

  const languages = await prisma.languages.findMany({
    ...offset,
    where,
  });

  return {
    ...info,
    data: languages.map(shape),
  };
}

export async function create(data: CreateSchema): Promise<LanguageShape> {
  const language = await prisma.languages.create({ data });

  return shape(language);
}

export async function update(
  id: number,
  data: UpdateSchema
): Promise<LanguageShape | null> {
  const language = await prisma.languages.update({ where: { id }, data });

  return shapeNullable(language);
}

export async function destroy(id: number): Promise<void> {
  await prisma.languages.delete({ where: { id } });
}
