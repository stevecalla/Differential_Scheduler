import { Router } from 'express';
import { AdditionalServicesRouter } from './additionalServicesRoutes.js';
import { AppointmentBlocksRouter } from './appointmentBlocksRoutes.js';
import { AvailabilityOptionsRouter } from './availabilityOptionsRoutes.js';
import { DwellingAdjustmentsRouter } from './dwellingAdjustmentsRoutes.js';
import { ServicesRouter } from './servicesRoutes.js';
import calendarRoutes from './calendarRoutes.js';
import { userRouter } from './user-routes.js';

const router = Router();

router.use('/calendar', calendarRoutes);
router.use('/additionalServices', AdditionalServicesRouter);
router.use('/appointmentBlock', AppointmentBlocksRouter);
router.use('/availabilityOptions/', AvailabilityOptionsRouter);
router.use('/dwellingAdjustments', DwellingAdjustmentsRouter);
router.use('/services', ServicesRouter);
router.use('/users', userRouter);

export default router;
