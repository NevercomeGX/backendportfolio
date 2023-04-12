import { Router } from 'express';
import emails from './emails';
import users from './users';
import projects from './projects';
import languages from './languages';
import projectsandLanguage from './projectsandLanguages'

const router = Router();

router.use('/users', users);
router.use('/emails', emails);
router.use('/projects', projects);
router.use('/languages', languages);
router.use('/pal', projectsandLanguage);

export default router;
