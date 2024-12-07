import { Router } from 'express';
const router = Router();

import calendarRoutes from './calendarRoutes.js';

router.use('/calendar', calendarRoutes);

export default router;