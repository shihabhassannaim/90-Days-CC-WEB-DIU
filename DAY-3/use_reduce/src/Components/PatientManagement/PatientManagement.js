import React, { useReducer, useRef } from 'react';
import { PatientReducer, patientState } from '../PatientReducer/PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state , dispatch] = useReducer(PatientReducer , patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_PATIENT'})
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <h1>patient management : {state.patient.length()}</h1>
            <form onSubmit={handleSubmit}>
                <input value={nameRef}></input>
            </form>
        </div>
    );
};

export default PatientManagement;