import Vaccination from '../components/Form';

export default function AddForm({ onAddVac, onUpdateVac }) {
  return (
    <>
      <h1>Impfung hinzufügen</h1>
      <Vaccination onAddVac={onAddVac} onUpdateVac={onUpdateVac} />
    </>
  );
}
