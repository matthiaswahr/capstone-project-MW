import mongoose from 'mongoose';

const vaccinationSchema = new mongoose.Schema({
  vaccination: String,
  producer: String,
  date: Date,
  firstVaccionation: Boolean,
  secondVaccination: Boolean,
  booster: Boolean,
  sideEffects: Array,
  nextAppointment: String,
});

const Vaccination = mongoose.model('Vaccination', vaccinationSchema);

export default Vaccination;
