import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export default function Navigation() {
  return (
    <NavigationBar>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/AddForm">Add Form</NavLink>
      <NavLink to="/Appointments">Appointments</NavLink>
      <NavLink to="/Info">Info zu COVID 19</NavLink>
      <NavLink to="/Map">Map</NavLink>
    </NavigationBar>
  );
}
const NavigationBar = styled.nav`
  display: flex;
`;
