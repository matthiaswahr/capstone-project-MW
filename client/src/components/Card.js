import styled from 'styled-components/macro';

import deleteIcon from '../assets/delete.svg';
import editIcon from '../assets/edit.svg';
import openIcon from '../assets/appointment.svg';

export default function VaccinationCard({
  vaccination,
  onSetEdited,
  onRemove,
  onOpen,
}) {
  const renameObject = {
    covid19: 'Covid 19',
    tetanus: 'Tetanus',
    hepatitis_a: 'Hepatitis A',
    hepatitis_b: 'Hepatitis B',
    influenza: 'Influenza',
    fsme: 'FSME',
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return (
      date.getDay() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    );
  }

  function handleClick(clickedVacc) {
    onSetEdited(clickedVacc);
  }

  return (
    <Card>
      <p>Imfpung gegen</p>
      <Component>{renameObject[vaccination.vaccination]}</Component>
      <p>Impstoff bzw. Hersteller</p>
      <Component>{vaccination.producer}</Component>
      <p>Datum der Impfung</p>
      <Component>{formatDate(vaccination.date)}</Component>
      <Component>{vaccination.firstVaccination ? 'Erstimpfung' : ''}</Component>
      <Component>
        {vaccination.secondVaccination ? 'Zweitimpfung' : ''}
      </Component>
      <Component>{vaccination.booster ? 'Booster' : ''}</Component>
      <p>Nebenwirkungen</p>
      <Component>
        {vaccination.sideEffects?.map((s) => (
          <span>{s}</span>
        ))}
      </Component>
      <Buttons>
        <img
          src={editIcon}
          alt="Impfung bearbeiten"
          onClick={() => handleClick(vaccination)}
        />

        <img
          src={deleteIcon}
          alt="Impfung löschen"
          onClick={() => handleClick(vaccination)}
        />

        <img
          src={openIcon}
          alt="Impfung vormerken"
          onClick={() => handleClick(vaccination)}
        />
      </Buttons>
    </Card>
  );
}

const Card = styled.section`
  background-color: var(--gray);
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  margin: 0.5rem;
  margin-bottom: 0;
  padding: 0.5rem;
  width: 100vw;
  max-width: 30rem;
`;

const Component = styled.h3`
  color: red;
  padding-bottom: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    cursor: pointer;
    width: 2rem;
  }
`;
