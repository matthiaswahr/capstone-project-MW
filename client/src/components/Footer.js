import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <NavWrapper>
      <NavLink exact to="/LandingPage">
        <NavIcon>Home</NavIcon>
      </NavLink>

      <NavLink to="/AddForm">
        <NavIcon>Impfung hinzufügen</NavIcon>
      </NavLink>

      <NavLink to="/Appointments">
        <NavIcon>Termine</NavIcon>
      </NavLink>

      <NavLink to="/Info">
        <NavIcon>Info</NavIcon>
      </NavLink>

      <NavLink to="/Map">
        <NavIcon>Karte</NavIcon>
      </NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-end;
  padding: 2rem;
  margin: 0.5rem;
  position: absolut;
  bottom: 0;
`;

const NavIcon = styled.nav`
  text-decoration: none;
  cursor: pointer;
  :hover {
    transform: scale() (1.2);
  }
`;
