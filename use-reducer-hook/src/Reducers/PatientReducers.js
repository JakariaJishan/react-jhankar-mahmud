export const patientState = {
    patients : []
}

export function patientReducer(state, action) {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient ={
                id: action.id,
                name: action.name
            }
            const updatePatient = [...state.patients, newPatient];
            // console.log(updatePatient);
            return {patients: updatePatient};
        case 'REMOVE_PATIENT':
            console.log(action)
            const remainingPatient = state.patients.filter(pt => pt.id !== action.id);
            console.log(remainingPatient);
            // const newState = {patients: remainingPatient};
            return {patients: remainingPatient};
        default:
            return state;
    }
}