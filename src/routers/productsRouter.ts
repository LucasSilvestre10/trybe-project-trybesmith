import { Router } from 'express';
import productsController from '../controller/productsController';

const router = Router();

router.post('/products', productsController.postProducts);

export default router;