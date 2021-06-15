import { useEffect, useState } from 'react';
import VaccinationForm from './components/Form';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';

import LandingPage from './pages/LandingPage';
import AddForm from './pages/AddForm';
import Appointments from './pages/Appointments';
import Info from './pages/Info';
import Map from './pages/Map';

function App() {
  /* const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });
*/

  return (
    <main className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/AddForm">
          <AddForm />
        </Route>

        <Route path="/Appointments">
          <Appointments />
        </Route>

        <Route path="/Info">
          <Info />
        </Route>

        <Route path="/Map">
          <Map />
        </Route>
      </Switch>
    </main>
  );
}

const Navigation = styled.nav`
  display: flex;
`;

const Home = styled.nav``;

export default App;
