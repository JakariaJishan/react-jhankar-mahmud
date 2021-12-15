import React, { useReducer, useRef } from "react";
import { patientReducer, patientState } from "../../Reducers/PatientReducers";

const PatientManagement = () => {
  const [state, dispatch] = useReducer(patientReducer, patientState);
  const userRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value);
    dispatch({
        type: 'ADD_PATIENT',
        id: state.patients.length + 1,
        name: userRef.current.value
    })
    userRef.current.value = '';
  };
  return (
    <div>
      <h1>Patient Management: {state.patients.length}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={userRef} />
      </form>
      {
          state.patients.map((pt) => 
          <li
          key={pt.id}
          onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
          >{pt.name}</li>)
      }
    </div>
  );
};

export default PatientManagement;
