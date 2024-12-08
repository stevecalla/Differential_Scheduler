import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { AdditionalServicesRouter } from './additionalServicesRoutes';
import { AppointmentBlocksRouter } from './appointmentBlocksRoutes';
import { AvailabilityOptionsRouter } from './availabilityOptionsRoutes';
import { DwellingAdjustmentsRouter } from './dwellingAdjustmentsRoutes';
import { ServicesRouter } from './servicesRoutes';
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
