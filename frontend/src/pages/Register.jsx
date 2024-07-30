import Button from 'react-bootstrap/esm/Button'
import map5 from '../assets/map5.jpg'
import TopContainer from '../components/containers/TopContainer'
import RegisterContainer from '../components/containers/RegisterContainer'
import RegistrationContainer from '../components/containers/RegistrationContainer'
import { useState } from 'react'

export default function Register() {
    const [ showForm, setShowForm ] = useState(false);

    const onToggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <TopContainer activeTab={'Register'} background={map5}>
                {!showForm ? <RegisterContainer onToggleForm={onToggleForm}/>
                : <RegistrationContainer onToggleForm={onToggleForm}/>}
            </TopContainer>
        </>
    )
}