import styled from 'styled-components/macro';
import Vaccination from '../components/Form';
import VaccinationCard from '../coponents/Card';

export default function Appointments(
  openAppointment,
  onAddToAppointment,
  isAppointment
) {
  return (
    <>
      <Wrapper>
        <h1>Offene Termine</h1>
        {openAppointment.map((vaccination) => {
          return (
            <VaccinationCard
              key={Vaccination._id}
              vaccination={vaccination}
              onAddToAppointment={onAddToAppointment}
              isAppointment={isAppointment}
            />
          );
        })}
        );
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  height: 100vw;
`;
