import styled from 'styled-components/macro';

export default function VaccinationCard({ vaccination }) {
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

  return (
    <Card>
      <p>Imfpung gegen</p>
      <Headline>{renameObject[vaccination.vaccination]}</Headline>
      <p>Impstoff bzw. Hersteller</p>
      <Headline>{vaccination.producer}</Headline>
      <p>Datum der Impfung</p>
      <Headline>{formatDate(vaccination.date)}</Headline>
      <Headline>{vaccination.firstVaccination ? 'f' : ''}</Headline>
      <Headline>{vaccination.secondVaccination}</Headline>
      <Headline>{vaccination.booster}</Headline>
      <p>Nebenwirkungen</p>
      <Headline>
        {vaccination.sideEffects?.map((s) => (
          <span>{s}</span>
        ))}
      </Headline>
      <p>Nächster Termin</p>
      <Headline>{vaccination.nextAppointment}</Headline>
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
  width: auto;
`;

const Headline = styled.h3`
  color: red;
  padding-bottom: 1rem;
`;
