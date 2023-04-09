import { Prisma, Language } from '@prisma/client';
import type { LanguageShape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape(language: Language): LanguageShape {
  return { ...language };
}

export function shapeNullable(language: Language | null): LanguageShape | null {
  return language ? shape(language) : null;
}

export async function _getLanguageById(id: string): Promise<Language | null> {
  const language = await prisma.language.findUnique({ where: { id } });

  return language;
}

export async function findLanguageById(id: string): Promise<LanguageShape | null> {
  const language = await prisma.language.findUnique({ where: { id } });

  return shapeNullable(language);
}

export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<LanguageShape>> {
  const where: Prisma.LanguageWhereInput = {};

  const count = await prisma.language.count({ where });
  const { offset, info } = getPagination(count, query);

  const languages = await prisma.language.findMany({
    ...offset,
    where,
  });

  return {
    ...info,
    data: languages.map(shape),
  };
}

export async function create(data: CreateSchema): Promise<LanguageShape> {
  const language = await prisma.language.create({ data });

  return shape(language);
}

export async function update(
  id: string,
  data: UpdateSchema
): Promise<LanguageShape | null> {
  const language = await prisma.language.update({ where: { id }, data });

  return shapeNullable(language);
}

export async function destroy(id: string): Promise<void> {
  await prisma.language.delete({ where: { id } });
}
