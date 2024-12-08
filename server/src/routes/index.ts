import { Router } from 'express';
const router = Router();

import authRoutes from './authRoutes.js';
import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';
import { authenticateToken } from '../middleware/auth.js';


router.use('/auth', authRoutes);
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

export default router;