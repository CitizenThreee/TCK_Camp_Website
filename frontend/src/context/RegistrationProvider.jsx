import { createContext, useState, useContext } from "react";

const registrationContext = createContext();

export function RegistrationProvider(props) {
    const [registration, setRegistration] = useState({
        type: 'standard',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        medical: '',
        medicalDetails: '',
        allergies: false,
        allergyDetails: '',
        c1fname: '',
        c1lname: '',
        c1phone: '',
        c2fname: '',
        c2lname: '',
        c2phone: '',
        placesLived: '',
        affiliations: '',
        plans: '',
        lunch: -1,
        date: false,
        bring: false,
        fees: false,
        signature: '',
        time: '',
    })

    function handleSetRegistration(registration) {
        setRegistration(registration);
    }

    return (
        <registrationContext.Provider value={{registration, handleSetRegistration: handleSetRegistration}}>
            {props.children}
        </registrationContext.Provider>
    )
}

export function useRegistrationContext() {
    return useContext(registrationContext);
}