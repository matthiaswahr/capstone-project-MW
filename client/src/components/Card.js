import styled from 'styled-components/macro';

export default function VaccinationCard({ vaccination }) {
  return (
    <Card>
      <h3>{vaccination.vaccination}</h3>
      <p>{vaccination.producer}</p>
      <p>{vaccination.date}</p>
    </Card>
  );
}

const Card = styled.section`
  background-color: var(--grey);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
  padding: 1rem;
`;
