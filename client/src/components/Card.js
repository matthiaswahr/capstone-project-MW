import styled from 'styled-components';

export default function VaccinationCard({ vaccination }) {
  return (
    <Card>
      <h3>{vaccination.vaccination}</h3>
      <p>{vaccination.producer}</p>
      <p>{vaccination.date}</p>
    </Card>
  );
}

const Card = styled.div``;
