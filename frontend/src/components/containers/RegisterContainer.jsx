import Button from 'react-bootstrap/esm/Button'
import data from '../../data.json';

export default function RegisterContainer({onToggleForm}) {
    return (
        <div className='p-3 d-flex align-items-start h-container'>
            <section className='p-3 bg-2b skewed-box mx-auto w-content d-flex flex-column my-auto'>
                <h2 className='font-1 text-1'>Prices</h2>
                <div className='fs-4 d-flex justify-content-between text-1'>
                    <p>Standard Camper</p>
                    <p>{`$${data.standardprice}`}</p>
                </div>
                <div className='fs-4 d-flex justify-content-between text-1'>
                    <p>Additional Sibling</p>
                    <p>{`$${data.additionalprice}`}</p>
                </div>
                {!data.registrationenabled && <p className='mx-auto text-1'>Registrations are not open yet, please check back later!</p>}
                <Button className='mx-5 mt-2 mb-5' onClick={onToggleForm} disabled={!data.registrationenabled}>Register</Button>
                <p className='font-1 fs-5 mb-0 text-1'>Cancelation Policy</p>
                <p className='fs-6 text-justify text-1' style={{textAlign: "justify"}}>
                    If you cancel up to one week prior to the first day of camp, fees will be fully
                    refunded. From one week to 48 hours before camp begins, 80% of camp fees will
                    be refunded. From 48 hours until the start of camp, since resources will have
                    been purchased by then, we are not able to offer a refund. We appreciate your
                    understanding. If you need to cancel, please get in touch with
                    us at <a href="mailto:hello@tckcamp.com">hello@tckcamp.com.</a>
                </p>
            </section>
        </div>
    )
}