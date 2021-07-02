import styled from 'styled-components/macro';
import VaccinationCard from '../components/Card';
export default function Appointments({
  openAppointments,
  onRemoveAppointment,
}) {
  return (
    <>
      <Wrapper>
        <h1>Offene Termine</h1>
        {openAppointments.length > 0 &&
          openAppointments.map((vaccination) => {
            return (
              <VaccinationCard
                key={vaccination._id}
                vaccination={vaccination}
                onRemoveAppointment={onRemoveAppointment}
                isAppointment
              />
            );
          })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  height: 100vw;
`;
