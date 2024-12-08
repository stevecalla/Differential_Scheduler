import { Router } from 'express';
import { userRouter } from './user-routes.js';
import calendarRoutes from './calendarRoutes.js';

const router = Router();

router.use('/calendar', calendarRoutes);
router.use('/users', userRouter);

export default router;