import { useEffect, useState } from 'react';
import VaccinationForm from './components/Form';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';

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
          <VaccinationForm />
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
