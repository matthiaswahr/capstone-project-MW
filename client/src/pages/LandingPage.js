import styled from 'styled-components';
import VaccinationCard from '../components/Card';

export default function LandingPage({ allVaccinations }) {
  return (
    <>
      <Title>
        <h1>Get Start Vaccinated</h1>
      </Title>
      {allVaccinations &&
        allVaccinations.map((vac, index) => (
          <VaccinationCard key={index} vaccination={vac} />
        ))}
    </>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: red;
  }
`;
