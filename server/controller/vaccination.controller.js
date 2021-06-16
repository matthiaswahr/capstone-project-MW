import Vaccination from '../models/vaccination.model';

function getVaccinations(req, res) {
  Vaccination.find().then((vaccination) => res.json(vaccination));
}

function getVaccinationId(req, res) {
  const { vaccinationId } = req.params;
  Vaccination.findById(vaccinationId)
    .then((vaccination) => {
      res.json(vaccination);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postVaccination(req, res) {
  const vaccination = new Vaccination({
    vaccination: req.body.vaccination,
    producer: req.body.producer,
    date: req.body.date,
    firstVaccination: req.body.firstVaccination,
    secondVaccination: req.body.secondVaccination,
    booster: req.body.booster,
    sideEffects: req.body.sideEffects,
    nextAppointment: req.body.nextAppointment,
  });
  vaccination
    .save()
    .then((vaccinationSaved) => res.json(vaccinationSaved))
    .catch((error) => res.json(error.message));
}

function updateVaccination(req, res) {
  const { vaccinationId } = req.params;
  const updatedVaccination = req.body;

  Vaccination.findByIdAndUpdate(
    { _id: vaccinationId },
    updatedVaccination,
    (error, doc) => {
      if (error) {
        res.json({ message: error });
        return;
      }
      res.json(doc);
    }
  );
}

function deleteVaccination(req, res) {
  const { vaccinationId } = req.params;
  Vaccination.findByIdAndRemove({ _id: vaccinationId }, (error, doc) =>
    res.json({
      success: true,
      message: `The Vaccination ${doc.name} has been deleted.`,
      data: doc,
    })
  );
}

export {
  getVaccinations,
  getVaccinationId,
  postVaccination,
  updateVaccination,
  deleteVaccination,
};
