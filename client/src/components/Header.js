import { Link } from 'react-router-dom';

import header from '../assets/SVGLogo.svg';
import styled from 'styled-components';

export default function Header() {
  return (
    <Link exact to="/">
      <Image src={header} alt="Logo" />
    </Link>
  );
}

const Image = styled.img`
  height: 1.6rem;
  background-image: linear-gradient(
    45deg,
    #85ffbd 0%,
    #fffb7d 50%,
    #ffffff 100%
  );
  width: 100vw;
  height: 7rem;
  padding-bottom: 0.5rem;
`;
