import PropTypes from 'prop-types';
import { useState } from 'react';

import styled from 'styled-components/macro';

VaccinationForm.PropTypes = {
VaccinationForm: PropTypes.func,
}

export default function VaccinationForm {

    const initalState = {

       Impfung: '',
       Bezeichung_Hersteller: '',
       Datum: '',
       Erstimpfung:true,
       Folgeimpfung:false,
       Nebenwirkungen: [],
       Nächste_Impfung: '',
    };

    const [vaccination, setVaccination] = useState();
    const [isError, setError] = useState(false); // wird später for onSubmit bzw. validation benötigt

    return (
        <Form onSubmit={SubmitHandler}>
            <h2>Impfung hinzufügen</h2>
            <label htmlFor="Impfung">Impfung</label>
            <select name="vac" id="vac" onChange={updateVaccination} value={vaccination.vac}>
                <option value="">---Bitte Impfung auswählen---</option>
                </select>
            type="text"

        </Form>
    );

    
    }

