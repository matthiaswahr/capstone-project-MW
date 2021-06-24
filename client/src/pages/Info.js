import styled from 'styled-components/macro';

export default function Info() {
  return (
    <Wrapper>
      <h1>Aktuelle Infos zu COVID 19</h1>
    </Wrapper>
  );
}
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
