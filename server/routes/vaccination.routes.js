import express from 'express';

import {
  getVaccinations,
  getVaccinationId,
  postVaccination,
  updateVaccination,
  deleteVaccination,
} from '../controller/vaccination.controller.js';

const router = express.Router();

router.get('/vaccination', getVaccinations);
router.get('/vaccination/:vacinationId', getVaccinationId);
router.post('/vaccination', postVaccination);
router.put('/vaccination/:vaccinationId', updateVaccination);
router.delete('/vaccination/:vaccinationId', deleteVaccination);

export default router;
