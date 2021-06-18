import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AddForm from './pages/AddForm';
import Appointments from './pages/Appointments';
import Info from './pages/Info';
import Map from './pages/Map';
import Navigation from './components/Navigation';

function App() {
  const [allVaccinations, setAllVaccinations] = useState([]);

  useEffect(() => {
    fetch('/vaccination')
      .then((result) => result.json())
      .then((vaccination) => setAllVaccinations(vaccination))
      .catch((error) => console.error(error.message));
  }, []);

  function addVaccination(vaccination) {
    fetch('/vaccination', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vaccination: vaccination.vaccination,
        producer: vaccination.producer,
        date: vaccination.date,
        firstVaccination: vaccination.firstVaccination,
        secondVaccination: vaccination.secondVaccination,
        booster: vaccination.booster,
        sideEffects: vaccination.sideEffects,
        nextAppointment: vaccination.nextAppointment,
      }),
    })
      .then((result) => result.json())
      .then((vaccination) =>
        setAllVaccinations([...allVaccinations, vaccination])
      )
      .catch((error) => console.error(error.message));
  }

  function updateVaccination(update) {
    const updatedVaccinations = allVaccinations.filter(
      (vaccination) => vaccination._id !== update._id
    );

    fetch(`/vaccination/${update._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vaccination: update.vaccination,
        producer: update.producer,
        date: update.date,
        firstVaccination: update.firstVaccination,
        secondVaccination: update.secondVaccination,
        booster: update.booster,
        nextAppointment: update.Appointment,
      }),
    })
      .then((result) => result.json())
      .then((updatedVaccination) =>
        setAllVaccinations([...updatedVaccinations, updatedVaccination])
      );
  }

  return (
    <main className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <LandingPage allVaccinations={allVaccinations} />
        </Route>

        <Route path="/AddForm">
          <AddForm onAddVac={addVaccination} />
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
