import { Prisma, Projects, Languages } from '@prisma/client';
import type { ProjectShape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape(project: Projects): ProjectShape {
  return { ...project };
}

export function shapeNullable(project: Projects | null): ProjectShape | null {
  return project ? shape(project) : null;
}

export async function _getProjectById(id: number): Promise<Projects | null> {
  const project = await prisma.projects.findUnique({
    where: { id },
    include: { language: true }, // include the related language
  });

  return project;
}

export async function findProjectById(id: number): Promise<ProjectShape | null> {
  const project = await prisma.projects.findUnique({
    where: { id },
    include: { language: true },
  });

  return shapeNullable(project);
}

export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<ProjectShape>> {
  const where: Prisma.ProjectsWhereInput = {};

  const count = await prisma.projects.count({ where });
  const { offset, info } = getPagination(count, query);

  const projects = await prisma.projects.findMany({
    ...offset,
    where,
  });

  return {
    ...info,
    data: projects.map(shape),
  };
}

export async function create(data: CreateSchema): Promise<ProjectShape> {
  const project = await prisma.projects.create({ data });

  return shape(project);
}

export async function update(
  id: number,
  data: UpdateSchema
): Promise<ProjectShape | null> {
  const project = await prisma.projects.update({ where: { id }, data });

  return shapeNullable(project);
}

export async function destroy(id: number): Promise<void> {
  await prisma.projects.delete({ where: { id } });
}
