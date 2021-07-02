import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AddForm from './pages/AddForm';
import Appointments from './pages/Appointments';
import Info from './pages/Info';
import Map from './pages/Map';
import Navigation from './components/Navigation';
import Header from './components/Header';

import { updateLocalStorage, loadFromLocalStorage } from './lib/localstorage';

function App() {
  const [allVaccinations, setAllVaccinations] = useState([]);

  const [vaccToBeEdited, setVaccToBeEdited] = useState('');

  const [isShowingEditModal, setIsShowingEditModal] = useState(false);

  const [idToDelete, setIdToDelete] = useState('');

  const [openAppointment, setOpenAppointment] = useState([]);

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
    const remainingVaccinations = vaccination.filter(
      (vaccination) => vaccination._id !== idToDelete
    );

    setVaccinations(remainingVaccinations);
    setIsShowingEditModal(false);

    fetch(`/vaccination/${idToDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => console.error(error.message));
  }

  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage
            allVaccinations={allVaccinations}
            onAddToAppointment={onAddToAppointment}
            onDeleteVaccination={onDeleteVaccination}
            openEditModal={() => setIsShowingEditModal(true)}
            isShowingEditModal={isShowingEditModal}
          />
        </Route>

        <Route path="/AddForm">
          <AddForm
            onAddVac={addVaccination}
            onUpdateVac={updateVaccination}
            onDelete={remainingVaccinations}
          />
        </Route>

        <Route path="/Appointments">
          <Appointments
            openAppointment={openAppointment}
            onRemoveVaccination={removeVaccination}
          />
        </Route>

        <Route path="/Info">
          <Info />
        </Route>

        <Route path="/Map">
          <Map />
        </Route>
      </Switch>
      <Navigation />
    </main>
  );
}

export default App;
