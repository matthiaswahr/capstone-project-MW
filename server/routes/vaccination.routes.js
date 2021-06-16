import express from 'express';

import {
  getVaccinations,
  getVaccinationId,
  postVaccination,
  updateVaccination,
  deleteVaccination,
} from '../controller/vaccination.controller';

const router = express.Router();

router.get('/vaccination', getVaccinations);
router.get('/vaccination/:vacinationId', getVaccinationId);
router.post('/vaccination', postVaccination);
router.put('/vaccionation/:vaccinationId', updateVaccination);
router.delete('/vaccination/:vaccinationId', deleteVaccination);

export default router;
