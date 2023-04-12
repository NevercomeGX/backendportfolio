import { Prisma, ProjectsandLanguage, Projects } from '@prisma/client';
import type { ProjectsandLanguageShape, CreateSchema, UpdateSchema, QuerySchema } from './types';
import prisma from '../../prisma';
import { getPagination } from '../../utils/helpers';
import { PaginatedResponse } from '../../types';

export function shape(projectAndLanguage: ProjectsandLanguage): ProjectsandLanguageShape {
  return { 
...projectAndLanguage
  };
}

export function shapeNullable(projectandlanguage: ProjectsandLanguage | null): ProjectsandLanguageShape | null {
  return projectandlanguage ? shape(projectandlanguage) : null;
}

// export async function _getProjectsandLanguageId(id: number): Promise<ProjectsandLanguage | null> {
//   const projectandlanguage = await prisma.projectsandLanguage.findUnique({ where: { id } });
//   return projectandlanguage as ProjectsandLanguage | null;
// }


export async function findMany(
  query: QuerySchema
): Promise<PaginatedResponse<ProjectsandLanguageShape>> {
  const where: Prisma.ProjectsWhereInput = {};

  const count = await prisma.projects.count({ where });
  const { offset, info } = getPagination(count, query);

  const projects = await prisma.projects.findMany({
    ...offset,
    include: {
      ProjectsandLanguage: {
        select: {
          projectId: true,
          languageId: true,
          assignedBy: true,
        }
      }
    },
    where,
  });

  return {
    ...info,
    data: projects.flatMap(project => project.ProjectsandLanguage.map(pl => ({
      projectId: pl.projectId,
      languageId: pl.languageId,
      assignedBy: pl.assignedBy,
    }))),
  };
}


export async function create(data: CreateSchema): Promise<ProjectsandLanguageShape> {
  const projectandlanguage = await prisma.projectsandLanguage.create({ data });

  return shape(projectandlanguage);
}
