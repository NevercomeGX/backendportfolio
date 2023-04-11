const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const _getLanguages = async () => {
  try {
    const languages = await prisma.Languages.findMany();
    console.log(languages);
  } catch (err) {
    console.log(err);
  }
};

const _addLanguages = async () => {
  try {
    const languages = await prisma.Languages.createMany({
      data: [
        {
          lenguague: 'Javascript',
          languageImageUrl: '/assets/languages/javascript.png',
        },
        {
          lenguague: 'Python',
          languageImageUrl: '/assets/languages/python.png',
        },
        {
          lenguague: 'TypeScript',
          languageImageUrl: '/assets/languages/typescript.png',
        },
        {
          lenguague: 'TailwindCSS',
          languageImageUrl: '/assets/languages/tailwindcss.png',
        },
        // Add more languages here...
      ],
    });
    console.log(languages);
  } catch (err) {
    console.log(err);
  }
};
const _addProject = async () => {
  try {
    const project = await prisma.Projects.createMany({
      data: [
        {
          title: 'My Javascript Project ',
          description: 'aaaaaaa',
          projectImageUrl: '/assets/projects/ProjectJavascript.png',
        },
        {
          title: 'My Python Project',
          description: 'bbbbbbb',
          projectImageUrl: '/assets/projects/Projectpython.png',
        },
        {
          title: 'My TypeScript Project',
          description: 'ccccccc',
          projectImageUrl: '/assets/projects/Projecttypescript.png',
        },
        // Add more projects here...
      ],
    });
    console.log(project);
  } catch (err) {
    console.log(err);
  }
};

const _getProjects = async () => {
  try {
    const projects = await prisma.Projects.findMany({
      select: {
        title: true,
        description: true,
        projectImageUrl: true,
        language: { select: { name: true } },
      },
    });
    console.dir(projects, { depth: null });
  } catch (err) {
    console.log(err);
  }
};

const assignLanguages = async () => {
  try {
    const projects = await prisma.Projects.update({
      where: { id: 1 },

      data: {
        language: {
          connect: { id: 3 },
        },
      },

      select: { id: true, language: true },
    });
    console.dir(projects, { depth: null });
  } catch (err) {
    console.log(err);
  }
};

const unassignLanguages = async () => {
  try {
    const projects = await prisma.Projects.update({
      where: { id: 1 },

      data: {
        language: {
          disconnect: { id: 3 },
        },
      },

      select: { name: true, language: true },
    });
    console.dir(projects, { depth: null });
  } catch (err) {
    console.log(err);
  }
};

// _addLanguages();
// _getLanguages();
_addProject();
assignLanguages();
