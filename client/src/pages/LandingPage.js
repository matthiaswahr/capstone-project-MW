import styled from 'styled-components';
import Navigation from '../components/Navigation';

export default function LandingPage() {
  return (
    <>
      <Title>
        <h1>Get Start Vaccinated</h1>
      </Title>
      <Navigation />
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
