import { Router } from 'express';
import authRoutes from './authRoutes.js';
import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';
import { authenticateToken } from '../middleware/auth.js';


const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);
router.use('/', htmlRoutes);

