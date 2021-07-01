import styled from 'styled-components';
import VaccinationCard from '../components/Card';

export default function LandingPage({ allVaccinations }) {
  return (
    <>
      <Container>
        <Wrapper>
          {allVaccinations &&
            allVaccinations.map((vac, index) => (
              <VaccinationCard key={index} vaccination={vac} />
            ))}
        </Wrapper>
      </Container>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5rem;
  width: 100vw;
`;
const Container = styled.section`
  height: auto;
  background-color: #85ffbd;
  background-image: linear-gradient(
    45deg,
    #85ffbd 0%,
    #fffb7d 50%,
    #ffffff 100%
  );
`;
