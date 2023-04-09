import { Prisma, Project } from '@prisma/client';
import type { ProjectShape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape(project: Project): ProjectShape {
  return { ...project };
}

export function shapeNullable(project: Project | null): ProjectShape | null {
  return project ? shape(project) : null;
}

export async function _getProjectById(id: string): Promise<Project | null> {
  const project = await prisma.project.findUnique({ where: { id } });

  return project;
}

export async function findProjectById(id: string): Promise<ProjectShape | null> {
  const project = await prisma.project.findUnique({ where: { id } });

  return shapeNullable(project);
}

export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<ProjectShape>> {
  const where: Prisma.ProjectWhereInput = {};

  const count = await prisma.project.count({ where });
  const { offset, info } = getPagination(count, query);

  const projects = await prisma.project.findMany({
    ...offset,
    where,
  });

  return {
    ...info,
    data: projects.map(shape),
  };
}

export async function create(data: CreateSchema): Promise<ProjectShape> {
  const project = await prisma.project.create({ data });

  return shape(project);
}

export async function update(
  id: string,
  data: UpdateSchema
): Promise<ProjectShape | null> {
  const project = await prisma.project.update({ where: { id }, data });

  return shapeNullable(project);
}

export async function destroy(id: string): Promise<void> {
  await prisma.project.delete({ where: { id } });
}
