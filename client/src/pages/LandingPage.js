import { useState } from 'react';
import styled from 'styled-components';
import VaccinationCard from '../components/Card';
import VaccinationForm from '../components/Form';

export default function LandingPage({
  allVaccinations,
  onAddToAppointment,
  onDeleteVaccination,
  onAddVaccination,
  openEditModal,
  isShowingEditModal,
}) {
  const [vaccinationToEdit, setVaccinationToEdit] = useState({});

  function openModal(vaccination) {
    setVaccinationToEdit(vaccination);
    openEditModal(true);
  }

  return (
    <>
      <Container>
        {allVaccinations &&
          allVaccinations.map((vac, index) => (
            <VaccinationCard
              key={index}
              vaccination={vac}
              onAddToAppointment={onAddToAppointment}
              onDeleteVaccination={onDeleteVaccination}
              onOpenEditModal={openModal}
            />
          ))}
        {isShowingEditModal && (
          <Wrapper>
            <VaccinationForm
              headlineText={'Bearbeiten'}
              vaccinationToEdit={vaccinationToEdit}
              onAddVaccination={onAddVaccination}
            />
          </Wrapper>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  h1 {
    text-align: center;
    color: red;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5rem;
  width: 100vw;
`;
