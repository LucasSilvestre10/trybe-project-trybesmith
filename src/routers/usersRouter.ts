import { Router } from 'express';
import usersController from '../controller/usersController';

const router = Router();

router.post('/users', usersController.postUsers);

export default router;