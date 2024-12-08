import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { AdditionalServicesRouter } from './additionalServicesRoutes.js';
import { AppointmentBlocksRouter } from './appointmentBlocksRoutes.js';
import { AvailabilityOptionsRouter } from './availabilityOptionsRoutes.js';
import { DwellingAdjustmentsRouter } from './dwellingAdjustmentsRoutes.js';
import { ServicesRouter } from './servicesRoutes.js';
import calendarRoutes from './calendarRoutes.js';

const router = Router();

router.use('/calendar', calendarRoutes);
router.use('/users', userRouter);
router.use('/additionalServices', AdditionalServicesRouter);
router.use('/appointmentBlock', AppointmentBlocksRouter);
router.use('/availabilityOptions/', AvailabilityOptionsRouter);
router.use('/dwellingAdjustments', DwellingAdjustmentsRouter);
router.use('/services', ServicesRouter)

export default router;
