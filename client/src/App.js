import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AddForm from './pages/AddForm';
import Appointments from './pages/Appointments';
import Info from './pages/Info';
import Map from './pages/Map';
import Navigation from './components/Navigation';

function App() {
  const [allVaccinations, setAllVaccinations] = useState([]);

  const addVac = (vac) => setAllVaccinations([...allVaccinations, vac]);

  return (
    <main className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <LandingPage allVaccinations={allVaccinations} />
        </Route>

        <Route path="/AddForm">
          <AddForm onAddVac={addVac} />
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

export default App;
