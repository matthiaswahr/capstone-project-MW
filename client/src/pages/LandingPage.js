import styled from 'styled-components';
import VaccinationCard from '../components/Card';

export default function LandingPage({ allVaccinations }) {
  return (
    <>
      <Title>
        <h1>Get Start Vaccinated</h1>
      </Title>
      <Wrapper>
        {allVaccinations &&
          allVaccinations.map((vac, index) => (
            <VaccinationCard key={index} vaccination={vac} />
          ))}
      </Wrapper>
    </>
  );
}

const Title = styled.div`
  h1 {
    text-align: center;
    color: red;
  }
`;

const Wrapper = styled.section`
  background-color: #85ffbd;
  background-image: linear-gradient(
    45deg,
    #85ffbd 0%,
    #fffb7d 50%,
    #ffffff 100%
  );
  height: 90vw;
`;
