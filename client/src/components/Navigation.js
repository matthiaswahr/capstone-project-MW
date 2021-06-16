<<<<<<< HEAD
export default function Navigation() {
  return <></>;
}
=======
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export default function Navigation() {
  return (
    <NavigationBar>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/AddForm">Add Form</NavLink>
    </NavigationBar>
  );
}
const NavigationBar = styled.nav`
  display: flex;
`;
>>>>>>> 19e7a1b0c7f0f0a65eb65c919b0a2c4d417a1c2c
