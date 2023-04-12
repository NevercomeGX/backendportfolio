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


const _addLanguages = async () => {
  try {
    const languages = await prisma.Languages.createMany({
      data: [
        {
          language: 'Javascript',
          languageImageUrl: '/assets/languages/javascript.png',
        },
        {
          language: 'Python',
          languageImageUrl: '/assets/languages/python.png',
        },
        {
          language: 'TypeScript',
          languageImageUrl: '/assets/languages/typescript.png',
        },
        {
          language: 'TailwindCSS',
          languageImageUrl: '/assets/languages/tailwindcss.png',
        },
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


const assignLanguages = async () => {
  try {
    const projectAndLanguage = await prisma.ProjectsandLanguage.create ({
      data: {
        projectId: 4,
        languageId: 5,
        assignedBy: 'John Doe',
      },
      select: {  projectId: true, languageId: true, assignedBy: true },
    });
    console.dir(projectAndLanguage, { depth: null });
  } catch (err) {
    console.log(err);
  }
};

// const unassignLanguages = async () => {
//   try {
//     const projects = await prisma.Projects.update({
//       where: { id: 1 },

//       data: {
//         language: {
//           disconnect: { id: 3 },
//         },
//       },

//       select: { name: true, language: true },
//     });
//     console.dir(projects, { depth: null });
//   } catch (err) {
//     console.log(err);
//   }
// };



assignLanguages();
