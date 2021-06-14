import PropTypes from 'prop-types';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components/macro';

export default function VaccinationForm() {
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
  const [isError, setError] = useState(false);
  const date = new Date();

  console.log(date.getFullYear());

  return (
    <Form>
      <h2>Impfung hinzufügen</h2>
      <ErrorBox isError={isError}>
        <p>Bitte Formulareingabe überprüfen</p>
      </ErrorBox>
      <label htmlFor="Impfung">Impfung</label>
      <select
        name="vac"
        id="vac"
        //onChange={updateVaccination}
        value={vaccination.Impfung}
      >
        <option value="">---Bitte Impfung auswählen---</option>
        <option value="">COVID 19</option>
        <option value="">Tetanus</option>
        <option value="">Hepatitis A</option>
        <option value="">Hepatitis B</option>
      </select>
      <label htmlFor="Bezeichnung_Hersteller">Hersteller bzw. Impfstoff</label>
      <input type="text" name="producer" />
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
  padding: 1.5 rem;
  border-radius: 0.4 rem;
  border: none;
  cursor: pointer;
`;
