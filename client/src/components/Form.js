import { useState } from 'react';

import styled from 'styled-components/macro';

export default function Vaccination({ onAddVac }) {
  const initialState = {
    vaccination: '',
    producer: '',
    date: '',
    firstVaccination: true,
    secondVaccination: true,
    booster: false,
    sideEffects: [],
    nextAppointment: '',
  };

  const [vaccination, setVaccination] = useState(initialState);

  const date = new Date();

  function updateVaccination(event) {
    const inputName = event.target.name;
    let inputValue = event.target.value;

    if (event.target.type === 'checkbox') {
      inputValue = event.target.checked;
    }
    setVaccination({ ...vaccination, [inputName]: inputValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddVac(vaccination);
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
          value={vaccination.secondVaccinatin}
        />
        <label>Booster</label>
        <input
          type="checkbox"
          name="booster"
          onChange={updateVaccination}
          value={vaccination.booster}
        />
      </Checkbox>
      <label>Nebenwirkungen</label>

      <Button>
        <input type="submit" value=" Impfung hinzufügen" />
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;

  margin: 0 auto;
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
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }
  fieldset {
    border: none;
    display: flex;
    gap: 0.4rem;
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
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  margin: 2rem;
`;
