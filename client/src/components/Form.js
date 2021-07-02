import { useState } from 'react';

import styled from 'styled-components/macro';
import SideEffects from './SideEffects';

export default function Vaccination({
  onAddVac,
  onUpdateVac,
  vaccinationToEdit,
}) {
  const initialState = {
    vaccination: '',
    producer: '',
    date: '',
    firstVaccination: false,
    secondVaccination: false,
    booster: false,
    sideEffects: [],
    nextAppointment: '',
  };

  const [vaccination, setVaccination] = useState(
    vaccinationToEdit ?? initialState
  );

  function updateVaccination(event) {
    const inputName = event.target.name;
    let inputValue = event.target.value;

    if (event.target.type === 'checkbox') {
      inputValue = event.target.checked;
    }
    setVaccination({ ...vaccination, [inputName]: inputValue });
  }

  function updateSideEffects(sideEffectsToAdd) {
    const sideEffects = [...vaccination.sideEffects, sideEffectsToAdd];
    setVaccination({ ...vaccination, sideEffects: sideEffects });
  }

  function deleteSideEffects(sideEffectsToDelete) {
    const sideEffects = vaccination.sideEffects.filter(
      (sideEffects) => sideEffects !== sideEffectsToDelete
    );
    setVaccination({ ...vaccination, sideEffects: sideEffects });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddVac(vaccination);
    onUpdateVac(vaccination);
    setVaccination(initialState);
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <h2>Impfung hinzufügen</h2>

      <label htmlFor="Impfung">Impfung</label>
      <select
        name="vaccination"
        onChange={updateVaccination}
        value={vaccination.vaccination}
      >
        <option value="">---Bitte Impfung auswählen---</option>
        <option value="covid19">COVID 19</option>
        <option value="tetanus">Tetanus</option>
        <option value="hepatitis_a">Hepatitis A</option>
        <option value="hepatitis_b">Hepatitis B</option>
        <option value="influenza">Influenza</option>
        <option value="fsme">FSME</option>
      </select>
      <label htmlFor="Bezeichnung_Hersteller">Hersteller bzw. Impfstoff</label>
      <input
        type="text"
        name="producer"
        onChange={updateVaccination}
        value={vaccination.producer}
      />
      <label>Datum </label>
      <input
        type="date"
        name="date"
        onChange={updateVaccination}
        value={vaccination.date}
      />
      <Checkbox>
        <label>Erstimpfung</label>
        <input
          type="checkbox"
          name="firstVaccination"
          onChange={updateVaccination}
          value={vaccination.firstVaccination}
        />
        <label>Zweitimpfung</label>
        <input
          type="checkbox"
          name="secondVaccination"
          onChange={updateVaccination}
          value={vaccination.secondVaccination}
        />
        <label>Booster</label>
        <input
          type="checkbox"
          name="booster"
          onChange={updateVaccination}
          value={vaccination.booster}
        />
      </Checkbox>
      <SideEffects
        sideEffects={vaccination.sideEffects}
        onUpdateSideEffects={updateSideEffects}
        onDeleteSideEffects={deleteSideEffects}
      />

      <Button isPrimary>Impfung hinzufügen</Button>
      <Button type="reset" onClick={() => setVaccination(initialState)}>
        Zurücksetzen
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;

  margin: 0.5rem;
  margin-top: 0;
  max-width: 25rem;

  label,
  legend {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  legend {
    margin-bottom: 0.5rem;
    padding: 0;
  }
  
  }
  fieldset {
    border: none;
    display: flex;

    padding: 0;
    margin: 0;
  }
  fieldset > label {
    font-weight: normal;
  }
  input[type='radio'],
  input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  margin: 0.5rem;
`;
