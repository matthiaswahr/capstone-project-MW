import Vaccination from '../components/Form';
import styled from 'styled-components/macro';

export default function AddForm({ onAddVac, onUpdateVac }) {
  return (
    <>
      <Container>
        <CardWrapper>
          <Vaccination onAddVac={onAddVac} onUpdateVac={onUpdateVac} />
        </CardWrapper>
      </Container>
    </>
  );
}

const CardWrapper = styled.section``;

const Container = styled.section`
  background-color: #85ffbd;
  background-image: linear-gradient(
    45deg,
    #85ffbd 0%,
    #fffb7d 50%,
    #ffffff 100%
  );
  height: 600px;
`;
