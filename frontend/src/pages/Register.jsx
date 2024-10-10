import TopContainer from '../components/containers/TopContainer'
import RegisterContainer from '../components/containers/RegisterContainer'
import RegistrationContainer from '../components/containers/RegistrationContainer'
import { useState, useEffect } from 'react'

export default function Register() {
    const [ showForm, setShowForm ] = useState(false);

    /*useEffect(() => {
        const handleLoad = () => {
            alert('This site is still under development, info may be placeholder and registrations will not work :)')
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        }
    }, []);*/

    const onToggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <TopContainer activeTab={'Register'}>
                {!showForm ? <RegisterContainer onToggleForm={onToggleForm}/>
                : <RegistrationContainer onToggleForm={onToggleForm}/>}
            </TopContainer>
        </>
    )
}