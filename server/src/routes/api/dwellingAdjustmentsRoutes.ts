import { Router, Request, Response } from 'express';
import { DwellingAdjustment } from '../../models/DwellingAdjustments.js';
import { AppointmentBlock } from '../../models/index.js';

// GET a single DwellingAdjustment
export const getDwellingAdjustmentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const DwellingAdjustmentData = await DwellingAdjustment.findByPk(id, {
      include: [{ model: AppointmentBlock }],
    });
    
    if (!DwellingAdjustmentData) {
      res.status(404).json({ message: 'No DwellingAdjustment found with that id!' });
      return;
    }
    
    res.status(200).json(DwellingAdjustmentData);
    // console.log(DwellingAdjustmentData);
  } catch (err) {
    res.status(500).json(err);
  }
};


const router = Router();

// GET a single DwellingAdjustments
router.get('/dwellingAdjustment/:id', getDwellingAdjustmentById);

export { router as DwellingAdjustmentsRouter };
