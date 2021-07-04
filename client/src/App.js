import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AddForm from './pages/AddForm';
import Appointments from './pages/Appointments';
import Navigation from './components/Navigation';
import Header from './components/Header';

import { updateLocalStorage, loadFromLocalStorage } from './lib/localstorage';

function App() {
  const [allVaccinations, setAllVaccinations] = useState([]);

  //const [vaccToBeEdited, setVaccToBeEdited] = useState('');

  const [isShowingEditModal, setIsShowingEditModal] = useState(false);

  const [openAppointments, setOpenAppointments] = useState([]);

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

  function updateVaccination(vaccination) {
    const updatedVaccinations = allVaccinations.filter(
      (vaccination) => vaccination._id !== vaccination._id
    );

    fetch(`/vaccination/${vaccination._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vaccination: vaccination.vaccination,
        producer: vaccination.producer,
        date: vaccination.date,
        firstVaccination: vaccination.firstVaccination,
        secondVaccination: vaccination.secondVaccination,
        booster: vaccination.booster,
        nextAppointment: vaccination.Appointment,
      }),
    })
      .then((result) => result.json())
      .then((updatedVaccination) =>
        setAllVaccinations([...updatedVaccinations, updatedVaccination])
      )
      .catch((error) => console.error(error.message));
  }

  function deleteVaccination(vaccToBeRemoved) {
    const remainingVaccinations = allVaccinations.filter(
      (vaccination) => vaccination._id !== vaccToBeRemoved._id
    );

    setAllVaccinations(remainingVaccinations);
    setIsShowingEditModal(false);

    fetch(`/vaccination/${vaccToBeRemoved._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));
  }
  function addToAppointments(vaccination) {
    setOpenAppointments([...openAppointments, vaccination]);
  }

  function removeVaccination(vaccination) {
    console.log('Remove vaccination with id: ' + vaccination._id);
  }

  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage
            allVaccinations={allVaccinations}
            onAddToAppointment={addToAppointments}
            onDeleteVaccination={deleteVaccination}
            openEditModal={() => setIsShowingEditModal(true)}
            isShowingEditModal={isShowingEditModal}
          />
        </Route>

        <Route path="/AddForm">
          <AddForm onAddVac={addVaccination} onUpdateVac={updateVaccination} />
        </Route>

        <Route path="/Appointments">
          <Appointments
            openAppointments={openAppointments}
            onRemoveAppointment={removeVaccination}
          />
        </Route>
      </Switch>
      <Navigation />
    </main>
  );
}

export default App;
