import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import home from '../assets/home.svg';
import addForm from '../assets/icons8-spritze.svg';
import appointment from '../assets/kalender.svg';
import map from '../assets/maps.svg';
import info from '../assets/info.svg';

export default function Navigation({ isStatic }) {
  return (
    <NavigationBar isStativ={isStatic}>
      <NavLink exact to="/">
        <img src={home} alt="home" />
      </NavLink>

      <NavLink to="/AddForm">
        <img src={addForm} alt="addForm" />
      </NavLink>

      <NavLink to="/Appointments">
        <img src={appointment} alt="appointment" />
      </NavLink>
      <NavLink to="/Info">
        <img src={info} alt="info" />
      </NavLink>
      <NavLink to="/Map">
        <img src={map} alt="info" />
      </NavLink>
    </NavigationBar>
  );
}

const NavigationBar = styled.footer`
  background: var(--primary-light);
  display: inline-flex;
  justify-content: space-around;
  padding: 0.4rem;
  width: 100vw;
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  bottom: 0;

  img {
    height: 50px;
    width: 50px;
  }
`;
