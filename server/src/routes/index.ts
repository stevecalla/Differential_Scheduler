import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { AuthRouter } from './auth-routes.js';
import { oAuthRouter } from './googleOauthRoutes.js';
import { userRouter } from './api/user-routes.js';
import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';


const router = Router();

router.use('/auth', AuthRouter);
router.use('/oauth', oAuthRouter);
router.use('/users', userRouter);
router.use('/api', authenticateToken, apiRoutes);
router.use('/', htmlRoutes);

export default router;