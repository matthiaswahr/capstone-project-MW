import PropTypes from 'prop-types';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components/macro';

export default function Vaccination() {
  const initialState = {
    vaccination: '',
    producer: '',
    date: '',
    firstVaccination: true,
    booster: false,
    sideEffects: [],
    nextAppointment: '',
  };

  const [vaccination, setVaccination] = useState(initialState);

  const date = new Date();

  console.log(date.getFullYear());

  function updateVaccination(event) {
    const inputName = event.target.name;
    let inputValue = event.target.value;
    setVaccination({ ...vaccination, [inputName]: inputValue });
  }

  return (
    <Form>
      <h2>Impfung hinzufügen</h2>

      <label htmlFor="Impfung">Impfung</label>
      <select
        name="vaccination"
        //onChange={updateVaccination}
        value={vaccination.text}
      >
        <option value="">---Bitte Impfung auswählen---</option>
        <option value="">COVID 19</option>
        <option value="">Tetanus</option>
        <option value="">Hepatitis A</option>
        <option value="">Hepatitis B</option>
      </select>
      <label htmlFor="Bezeichnung_Hersteller">Hersteller bzw. Impfstoff</label>
      <input type="text" name="producer" />
      <label>Datum </label>
      <input type="date" name="date" />
      <Checkbox>
        <label>Erstimpfung</label>
        <input type="checkbox" />
        <label>Zweitimpfung</label>
        <input type="checkbox" />
        <label>Booster</label>
        <input type="checkbox" />
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

const ErrorBox = styled.div`
  background: --gray;
  color: --white;
  padding: ${(props) => (props.isError ? '1.2rem' : 0)};
  border-radius: 0.5rem;
  opacity: ${(props) => (props.isError ? 1 : 0)};
  font-weight: bold;
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
  padding: 2rem
  margin: 2rem
`;
