import { Router } from 'express';
import emails from './emails';
import users from './users';



const router = Router();

router.use('/users', users);
router.use('/emails', emails);


export default router;
