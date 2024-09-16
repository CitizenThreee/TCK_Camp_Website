import { useState } from "react";
import { useRegistrationContext } from "../../context/RegistrationProvider";
import RegistrationForm from "../forms/RegistrationForm";
import { loadStripe } from '@stripe/stripe-js';
import { v4 as uuidv4 } from 'uuid';

const stripePromise = loadStripe('pk_test_51PiP40L8W1i3hvWFEUs0wgFaUhN1ofq3RNBKdVGugvXUdIoIcv0Vjqfl3EfmBALvdQ8GoBGYc2Rrs2ERpZvgpNkA00w7CPAIyG');

export default function RegistrationContainer() {
    const { registration } = useRegistrationContext();
    const [ regoLoading, setRegoLoading ] = useState(false);
    const [ errors, setErrors ] = useState({
        fname: true,
        lname: true,
        email: true,
        phone: true,
        dob: true,
        address: true,
        city: true,
        country: true,
        allergyDetails: true,
        c1fname: true,
        c1lname: true,
        c1phone: true,
        c2fname: true,
        c2lname: true,
        c2phone: true,
        lunch: true,
        date: true,
        bring: true,
        fees: true,
        signature: true
    });

    const onCheckout = async () => {
        try {
            const registrationId = uuidv4();
            const stripe = await stripePromise;
            const response = await fetch('https://vbiowx8w0l.execute-api.ap-southeast-2.amazonaws.com/prod/checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({regoid: registrationId, regoType: registration.type, data: {...registration, time: Date.now()}})
            });

            const session = await response.json();
            console.log(session);

            const result = await stripe.redirectToCheckout({
                sessionId: session.body.id,
            });

            if (result.error) {
                setRegoLoading(false);
                console.error(result.error.message);
            }
        }
        catch(e) {
            setRegoLoading(false);
            console.log(e);
        }
    }

    const onSubmit = () => {
        setRegoLoading(true);
        if(validateValues()) {
            onCheckout();
        }
        else{
            setRegoLoading(false);
        }
    }
    
    const onChangeError = (name, value) => {
        setErrors(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(registration.email);
    }

    const validateValues = () => {
        let passed = true;
        if(!registration.fname.length) { passed = false; onChangeError('fname', false) }
        if(!registration.lname.length) { passed = false; onChangeError('lname', false) }
        if(!validateEmail()) { passed = false; onChangeError('email', false) }
        if(!registration.phone.length) { passed = false; onChangeError('phone', false) }
        if(!registration.dob.length) { passed = false; onChangeError('dob', false) }
        if(!registration.address.length) { passed = false; onChangeError('address', false) }
        if(!registration.city.length) { passed = false; onChangeError('city', false) }
        if(!registration.country.length) { passed = false; onChangeError('country', false) }
        if(registration.allergies == true && !registration.allergyDetails.length ) { passed = false; onChangeError('allergyDetails', false) }
        if(!registration.c1fname.length) { passed = false; onChangeError('c1fname', false) }
        if(!registration.c1lname.length) { passed = false; onChangeError('c1lname', false) }
        if(!registration.c1phone.length) { passed = false; onChangeError('c1phone', false) }
        if(!registration.c2fname.length) { passed = false; onChangeError('c2fname', false) }
        if(!registration.c2lname.length) { passed = false; onChangeError('c2lname', false) }
        if(!registration.c2phone.length) { passed = false; onChangeError('c2phone', false) }
        if(registration.lunch == -1) { passed = false; onChangeError('lunch', false) }
        if(!registration.date) { passed = false; onChangeError('date', false) }
        if(!registration.bring) { passed = false; onChangeError('bring', false) }
        if(!registration.fees) { passed = false; onChangeError('fees', false) }
        if(!registration.signature.length) { passed = false; onChangeError('signature', false) }
        
        return passed;
    }

    return (
        <div className='p-3 d-flex align-items-start h-container'>
            <section className='p-3 bg-2b skewed-box mx-auto w-content d-flex flex-column'>
                <RegistrationForm onSubmit={onSubmit} errors={errors} onChangeError={onChangeError} regoLoading={regoLoading}/>
            </section>
        </div>
    )
}