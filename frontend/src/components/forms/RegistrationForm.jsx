import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRegistrationContext } from '../../context/RegistrationProvider';

export default function RegistrationForm({onSubmit, errors, onChangeError, regoLoading}) {
    const { registration, handleSetRegistration } = useRegistrationContext();

    const onChangeRegistration = (e) => {
        onChangeError(e.target.name, true)
        handleSetRegistration({
            ...registration,
            [e.target.name]: e.target.value 
        })
    }

    const onChangeDOB = (e) => {
        onChangeError('dob', true)
        const input = e.target.value.replace(/\D/g, '');
        const formattedInput = formatDOB(input);
        handleSetRegistration({
            ...registration,
            dob: formattedInput
        });
    };

    const formatDOB = (input) => {
        const month = input.substring(0, 2);
        const day = input.substring(2, 4);
        const year = input.substring(4, 8);

        if (input.length < 3) {
            return month;
        } else if (input.length < 5) {
            return `${month}/${day}`;
        } else {
            return `${month}/${day}/${year}`;
        }
    };

    const onChangeRadio = (name, value) => {
        onChangeError(name, true)
        handleSetRegistration({
            ...registration,
            [name]: value
        })
    }

    return (
        <Form className='text-black px-3 mx-auto' noValidate>
            <h2 className='font-1 text-white fs-4'>Camper registration details</h2>
            <p className='text-white' style={{textAlign: 'justify'}}>*Campers under 18 must have their parents/guardians' permission to register. All information you provide is kept private, is not shared with any outside/third-party organizations, and is used for the purposes of registration. If you have any privacy concerns, please e-mail us for a paper registration form.</p>
            <Row className='mb-3 d-flex justify-content-between'>
                <Col sm={12} md={'auto'}>
                    <Form.Label className='fs-4 font-1 text-nowrap text-white'>Registration type</Form.Label>
                </Col>
                <Col sm={12} md={'auto'}>
                    <Form.Select value={registration.type} name='type' onChange={onChangeRegistration}>
                        <option value='standard'>Standard Camper</option>
                        <option value='additional'>Additional Sibling</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Label className='fs-4 font-1 text-nowrap text-white'>Camper details</Form.Label>
            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="First Name*">
                            <Form.Control isInvalid={!errors.fname} type="text" placeholder="first name" name='fname' value={registration.fname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's first name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6} className="mb-3">
                    <Form.Group>
                        <FloatingLabel label="Last Name*">
                            <Form.Control isInvalid={!errors.lname} type="text" placeholder="last name" name='lname' value={registration.lname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's last name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            
            <Form.Group className="mb-3" >
                <FloatingLabel label="Email*">
                    <Form.Control isInvalid={!errors.email} type="email" placeholder="email" name='email' value={registration.email} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <Form.Text className='text-white'>Camper or parent/guardian contact email address</Form.Text>
            </Form.Group>

            <Row className='mb-3'>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Phone*">
                            <Form.Control isInvalid={!errors.phone} type="number" placeholder="phone" name='phone' value={registration.phone} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid phone number.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <Form.Text className='text-white'>Camper or parent/guardian contact phone number</Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Date of Birth* | dd/mm/yyyy">
                            <Form.Control isInvalid={!errors.dob} type="text" placeholder="dd/mm/yyyy" value={registration.dob} onChange={onChangeDOB}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's date of birth.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Address*">
                            <Form.Control isInvalid={!errors.address} type="text" placeholder="address" name='address' value={registration.address} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's address.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="City/Town*">
                            <Form.Control isInvalid={!errors.city} type="text" placeholder="city" name='city' value={registration.city} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's city of residence.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="State/Province">
                            <Form.Control type="text" placeholder="state" name='state' value={registration.state} onChange={onChangeRegistration}/>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="Zip/Postal Code">
                            <Form.Control type="number" placeholder="zip" name='zip' value={registration.zip} onChange={onChangeRegistration}/>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group >
                        <FloatingLabel label="Country*">
                            <Form.Control isInvalid={!errors.country} type="text" placeholder="country" name='country' value={registration.country} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the country the camper lives in.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>

            <hr className='text-white'/>
            
            <Form.Label className='fs-4 font-1 text-white'>Allergies</Form.Label>
            <p className='text-white' style={{textAlign: 'justify'}}>*Does the camper have any allergies? There are qualified nurses at camp who can assist with regular medication, and we are able to assist with most dietary requirements</p>
            <div className='text-white font-1 mb-3'>
                <Form.Check inline label={'yes'} type='radio' name='dietary' checked={registration.allergies} onChange={() => onChangeRadio('allergies', true)}/>
                <Form.Check inline label={'no'} type='radio' name='dietary' checked={!registration.allergies} onChange={() => onChangeRadio('allergies', false)}/>
            </div>

            <p className='text-white'>If you answered yes to the above, please explain in more detail:</p>
            <Form.Group className="mb-3" >
                <FloatingLabel label="Gluten free, allergic to peanuts, etc.">
                    <Form.Control isInvalid={!errors.allergyDetails} type="text" placeholder="allergies" name='allergyDetails' value={registration.allergyDetails} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        You have indicated the camper has allergies, please provide details on what allergies the camper has.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <hr className='text-white'/>

            <Form.Label className='fs-4 font-1 text-white'>Emergency contacts</Form.Label>
            <p className='text-white'>*Emergency contact 1</p>

            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="First Name">
                            <Form.Control isInvalid={!errors.c1fname} type="text" placeholder="first name" name='c1fname' value={registration.c1fname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a first name for emergency contact 1.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="First Name">
                            <Form.Control isInvalid={!errors.c1lname} type="text" placeholder="first name" name='c1lname' value={registration.c1lname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a last name for emergency contact 1.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" >
                <FloatingLabel label="Phone">
                    <Form.Control isInvalid={!errors.c1phone} type="number" placeholder="phone" name='c1phone' value={registration.c1phone} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a phone number for emergency contact 1.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            
            <p className='text-white'>*Emergency contact 2</p>

            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="First Name">
                            <Form.Control isInvalid={!errors.c2fname} type="text" placeholder="first name" name='c2fname' value={registration.c2fname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a first name for emergency contact 2.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label="First Name">
                            <Form.Control isInvalid={!errors.c2lname} type="text" placeholder="first name" name='c2lname' value={registration.c2lname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a last name for emergency contact 2.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" >
                <FloatingLabel label="Phone">
                    <Form.Control isInvalid={!errors.c2phone} type="number" placeholder="phone" name='c2phone' value={registration.c2phone} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a phone number for emergency contact 2.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <hr className='text-white'/>

            <Form.Label className='fs-4 font-1 text-white'>About the camper</Form.Label>
            <p className='text-white' style={{textAlign: 'justify'}}>All of the following fields are entirely optional - they help us structure camp sessions and games, but you do not have to provide this information if you have privacy concerns. We do not share your information to third-party organisations, but it is subject to Squarespace's terms and conditions.</p>

            <Form.Group className='mb-3'>
                <FloatingLabel label="Places lived overseas">
                    <Form.Control
                        as="textarea"
                        placeholder="Places lived overseas"
                        style={{ height: '80px' }}
                        className='mb-3'
                        name='placesLived' value={registration.placesLived} onChange={onChangeRegistration}
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className='mb-3'>
                <FloatingLabel label="Affiliated associations/organisations">
                    <Form.Control
                        as="textarea"
                        placeholder="Affiliated associations/organisations"
                        style={{ height: '80px' }}
                        className='mb-3'
                        name='affiliations' value={registration.affiliations} onChange={onChangeRegistration}
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className='mb-3'>
                <FloatingLabel label="2025 plans in brief">
                    <Form.Control
                        as="textarea"
                        placeholder="2025 plans in brief"
                        style={{ height: '80px' }}
                        className='mb-3'
                        name='plans' value={registration.plans} onChange={onChangeRegistration}
                    />
                </FloatingLabel>
            </Form.Group>

            <hr className='text-white'/>

            <Form.Label className='fs-4 font-1 text-white'>Camp information and disclaimers</Form.Label>
            <p className='text-white mb-4' style={{textAlign: 'justify'}}>Please read each of the following carefully - they contain important details about camp. Screenshot or write down this information, although it will also be provided via e-mail closer to the camp start date.</p>

            <Form.Group className='text-white d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>Camp lunch*</Form.Label>
                <p style={{textAlign: 'justify'}}>Parents are invited to join us for lunch at 12:30pm on Saturday, 22nd January 2022 at Eastwest College before campers head home. We hope that the event gives a chance for parents to meet the parents of other TCKs, some of the campers, and camp leaders over a free meal. Please indicate below if you would like to join us. If you're unsure as of yet, indicate as such for now and let us know by e-mail whenever you can.</p>
                <Form.Check inline label={'My parents already indicated they are coming on a registration form of another camper'} 
                checked={registration.lunch == 0} onChange={() => onChangeRadio('lunch', 0)}
                type='radio' name='lunch' id='lunch1' isInvalid={!errors.lunch}/>
                <Form.Check inline label={'Both my parents are able to join and will be there'} 
                checked={registration.lunch == 1} onChange={() => onChangeRadio('lunch', 1)}
                type='radio' name='lunch' id='lunch2' isInvalid={!errors.lunch}/>
                <Form.Check inline label={'One of my parents is able to join and will be there'} 
                checked={registration.lunch == 2} onChange={() => onChangeRadio('lunch', 2)}
                type='radio' name='lunch' id='lunch3' isInvalid={!errors.lunch}/>
                <Form.Check inline label={"My parent's won't be joining"} 
                checked={registration.lunch == 3} onChange={() => onChangeRadio('lunch', 3)}
                type='radio' name='lunch' id='lunch4' isInvalid={!errors.lunch}/>
                <Form.Check inline label={'Unsure at the moment'} 
                checked={registration.lunch == 4} onChange={() => onChangeRadio('lunch', 4)}
                type='radio' name='lunch' id='lunch5' isInvalid={!errors.lunch}/>
            </Form.Group>

            <Form.Group className='text-white d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>Camp dates and times*</Form.Label>
                <p style={{textAlign: 'justify'}}>TCK Camp 2025 will commence at 2pm on Tuesday, 18th January 2025, and will continue until after lunch on Saturday, 22nd January 2025.</p>
                <Form.Check inline label={'I have read and understand the above'} type='radio' name='dates' id='dates'
                checked={registration.date} onChange={() => onChangeRadio('date', true)} isInvalid={!errors.date}/>
            </Form.Group>

            <Form.Group className='text-white d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>What to bring*</Form.Label>
                <p style={{textAlign: 'justify'}}>Campers must bring their own bedding (sheets/sleeping bag/pillows; mattresses are provided), towels, toiletries, and enough clothing for five days as well as some old clothing for messy games. We also ask that campers bring a Bible, a notebook, and a pen. We love board games, so if you have any you're willing to bring with you, please mark your name on them and pack them in your bag. The camp will include a beach trip, so you should also bring swimwear and a beach towel. Please note that while Eastwest College is a safe environment, we do not accept responsibility for lost/damaged property, so please make sure that especially if expensive items are brought to camp they are well looked-after and ideally insured.</p>
                <Form.Check inline label={'I have read and accept all of the above'} type='radio' name='bring' id='bring'
                checked={registration.bring} onChange={() => onChangeRadio('bring', true)} isInvalid={!errors.bring}/>
            </Form.Group>

            <Form.Group className='text-white d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>Registration fees*</Form.Label>
                <p style={{textAlign: 'justify'}}>Registration costs are indicated on this website. If registering one camper, please select 'standard'. Any additional siblings from the same family receive a discounted rate. If registering three siblings, for example, please pay one standard registration + two additional sibling registrations. If you have any concerns, please get in touch by e-mail for a paper registration form and pay by direct credit.</p>
                <Form.Check inline label={'I have read and accept all of the above'} type='radio' name='fees' id='fees'
                checked={registration.fees} onChange={() => onChangeRadio('fees', true)} isInvalid={!errors.fees}/>
            </Form.Group>

            <hr className='text-white'/>

            <Form.Label className='fs-5 font-1 text-white'>Please sign*</Form.Label>
            <p className='text-white' style={{textAlign: 'justify'}}>Please write your full name and today's date in the box below. This will act as your digital signature. In doing so, you accept that you have read and agreed to all information in the above section, and that all information you have provided is true and accurate. If you are under 18, please have your parent/guardian sign.</p>
            <Form.Group className="mb-4" >
                <FloatingLabel label="Full name dd/mm/yyyy">
                    <Form.Control isInvalid={!errors.signature} type="text" placeholder="signature" name='signature' value={registration.signature} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please sign the registration form.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Button className='w-100 btn-primary' disabled={regoLoading} onClick={onSubmit}>{regoLoading ? 'Loading...' : 'Register'}</Button>
        </Form>
    )
}