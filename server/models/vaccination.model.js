import mongoose from 'mongoose';

const vaccionationSchema = new mongoose.Schema({
  vaccination: String,
  producer: String,
  date: Date,
  firstVaccionation: Boolean,
  secondVaccination: Boolean,
  booster: Boolean,
  sideEffects: Array,
  nextAppointment: String,
});

const vaccination = mongoose.model('Vaccionation', vaccionationSchema);

export default Vaccination;
