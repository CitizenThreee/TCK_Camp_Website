import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRegistrationContext } from '../../context/RegistrationProvider';
import data from '../../data.json';

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
        <Form className='text-black text-1 px-3 mx-auto' noValidate>
            <h2 className='font-1  text-1 fs-4'>Camper registration details</h2>
            <p className=' text-1' style={{textAlign: 'justify'}}>*Campers under 18 must have their parents/guardians' permission to register. All information you provide is kept private, is not shared with any outside/third-party organizations, and is used for the purposes of registration. If you have any privacy concerns, please e-mail us for a paper registration form.</p>
            <Row className='mb-3 d-flex justify-content-between'>
                <Col sm={12} md={'auto'}>
                    <Form.Label className='fs-4 font-1 text-nowrap  text-1'>Registration type</Form.Label>
                </Col>
                <Col sm={12} md={'auto'}>
                    <Form.Select className='text-1' value={registration.type} name='type' onChange={onChangeRegistration}>
                        <option value='standard'>Standard Camper</option>
                        <option value='additional'>Additional Sibling</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Label className='fs-4 font-1 text-nowrap  text-1'>Camper details</Form.Label>
            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label={<span className='text-1'>First Name*</span>}>
                            <Form.Control isInvalid={!errors.fname} type="text" placeholder="first name" name='fname' value={registration.fname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's first name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6} className="mb-3">
                    <Form.Group>
                        <FloatingLabel label={<span className='text-1'>Last Name*</span>}>
                            <Form.Control isInvalid={!errors.lname} type="text" placeholder="last name" name='lname' value={registration.lname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's last name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            
            <Form.Group className="mb-3" >
                <FloatingLabel label={<span className='text-1'>Email*</span>}>
                    <Form.Control isInvalid={!errors.email} type="email" placeholder="email" name='email' value={registration.email} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <Form.Text className=' text-1'>Camper or parent/guardian contact email address</Form.Text>
            </Form.Group>

            <Row className='mb-3'>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>Phone*</span>}>
                            <Form.Control isInvalid={!errors.phone} type="number" placeholder="phone" name='phone' value={registration.phone} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid phone number.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <Form.Text className=' text-1'>Camper or parent/guardian contact phone number</Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>Date of Birth* | dd/mm/yyyy</span>}>
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
                        <FloatingLabel label={<span className='text-1'>Address*</span>}>
                            <Form.Control isInvalid={!errors.address} type="text" placeholder="address" name='address' value={registration.address} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's address.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>City/Town*</span>}>
                            <Form.Control isInvalid={!errors.city} type="text" placeholder="city" name='city' value={registration.city} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the camper's city of residence.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>State/Province</span>}>
                            <Form.Control type="text" placeholder="state" name='state' value={registration.state} onChange={onChangeRegistration}/>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>Zip/Postal Code</span>}>
                            <Form.Control type="number" placeholder="zip" name='zip' value={registration.zip} onChange={onChangeRegistration}/>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group >
                        <FloatingLabel label={<span className='text-1'>Country*</span>}>
                            <Form.Control isInvalid={!errors.country} type="text" placeholder="country" name='country' value={registration.country} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter the country the camper lives in.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>

            <hr className='text-1'/>
            
            <Form.Label className='fs-4 font-1  text-1'>Allergies</Form.Label>
            <p className=' text-1' style={{textAlign: 'justify'}}>*Does the camper have any allergies? There are qualified nurses at camp who can assist with regular medication, and we are able to assist with most dietary requirements</p>
            <div className=' text-1 font-1 mb-3'>
                <Form.Check inline label={<span className='text-1'>yes</span>} type='radio' name='dietary' checked={registration.allergies} onChange={() => onChangeRadio('allergies', true)}/>
                <Form.Check inline label={<span className='text-1'>no</span>} type='radio' name='dietary' checked={!registration.allergies} onChange={() => onChangeRadio('allergies', false)}/>
            </div>

            <p className=' text-1'>If you answered yes to the above, please explain in more detail:</p>
            <Form.Group className="mb-3" >
                <FloatingLabel label={<span className='text-1'>Gluten free, allergic to peanuts, etc.</span>}>
                    <Form.Control isInvalid={!errors.allergyDetails} type="text" placeholder="allergies" name='allergyDetails' value={registration.allergyDetails} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        You have indicated the camper has allergies, please provide details on what allergies the camper has.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Label className='fs-4 font-1  text-1'>Medical</Form.Label>
            <p className=' text-1' style={{textAlign: 'justify'}}>*Does the camper have any medical concerns that you feel we should be aware of?</p>
            <div className=' text-1 font-1 mb-3'>
                <Form.Check inline label={<span className='text-1'>yes</span>} type='radio' name='medical' checked={registration.medical} onChange={() => onChangeRadio('medical', true)}/>
                <Form.Check inline label={<span className='text-1'>no</span>} type='radio' name='medical' checked={!registration.medical} onChange={() => onChangeRadio('medical', false)}/>
            </div>

            <p className=' text-1'>If you answered yes to the above, please explain in more detail:</p>
            <Form.Group className="mb-3" >
                <FloatingLabel label={<span className='text-1'>Medical concerns</span>}>
                    <Form.Control isInvalid={!errors.medicalDetails} type="text" placeholder="medical" name='medicalDetails' value={registration.medicalDetails} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        You have indicated the camper has medical concerns we should be aware of, please provide details on what medical concerns the camper has.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <hr className='text-1'/>

            <Form.Label className='fs-4 font-1  text-1'>Emergency contacts</Form.Label>
            <p className=' text-1'>*Emergency contact 1</p>

            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>First Name</span>}>
                            <Form.Control isInvalid={!errors.c1fname} type="text" placeholder="first name" name='c1fname' value={registration.c1fname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a first name for emergency contact 1.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>Last Name</span>}>
                            <Form.Control isInvalid={!errors.c1lname} type="text" placeholder="last name" name='c1lname' value={registration.c1lname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a last name for emergency contact 1.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" >
                <FloatingLabel label={<span className='text-1'>Phone</span>}>
                    <Form.Control isInvalid={!errors.c1phone} type="text" placeholder="phone" name='c1phone' value={registration.c1phone} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a phone number for emergency contact 1.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            
            <p className='text-1'>*Emergency contact 2</p>

            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>First Name</span>}>
                            <Form.Control isInvalid={!errors.c2fname} type="text" placeholder="first name" name='c2fname' value={registration.c2fname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a first name for emergency contact 2.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" >
                        <FloatingLabel label={<span className='text-1'>Last Name</span>}>
                            <Form.Control isInvalid={!errors.c2lname} type="text" placeholder="last name" name='c2lname' value={registration.c2lname} onChange={onChangeRegistration}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter a last name for emergency contact 2.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" >
                <FloatingLabel label={<span className='text-1'>Phone</span>}>
                    <Form.Control isInvalid={!errors.c2phone} type="text" placeholder="phone" name='c2phone' value={registration.c2phone} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a phone number for emergency contact 2.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <hr className='text-1'/>

            <Form.Label className='fs-4 font-1  text-1'>About the camper</Form.Label>
            <p className=' text-1' style={{textAlign: 'justify'}}>All of the following fields are entirely optional - they help us structure camp sessions and games, but you do not have to provide this information if you have privacy concerns. We do not share your information with third-party organisations.</p>

            <Form.Group className='mb-3'>
                <FloatingLabel label={<span className='text-1'>Places lived overseas</span>}>
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
                <FloatingLabel label={<span className='text-1'>Affiliated associations/organisations</span>}>
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
                <FloatingLabel label={<span className='text-1'>2025 plans in brief</span>}>
                    <Form.Control
                        as="textarea"
                        placeholder="2025 plans in brief"
                        style={{ height: '80px' }}
                        className='mb-3'
                        name='plans' value={registration.plans} onChange={onChangeRegistration}
                    />
                </FloatingLabel>
            </Form.Group>

            <hr className='text-1'/>

            <Form.Label className='fs-4 font-1  text-1'>Camp information and disclaimers</Form.Label>
            <p className=' text-1 mb-4' style={{textAlign: 'justify'}}>Please read each of the following carefully - they contain important details about camp. Screenshot or write down this information, although it will also be provided via e-mail closer to the camp start date.</p>

            <Form.Group className=' text-1 d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>Camp lunch*</Form.Label>
                <p style={{textAlign: 'justify'}}>{`Parents are invited to join us for lunch at 12:30pm on Saturday, ${data.campenddatefull} at Eastwest College before campers head home. We hope that the event gives a chance for parents to meet the parents of other TCKs, some of the campers, and camp leaders over a free meal. Please indicate below if you would like to join us. If you're unsure as of yet, indicate as such for now and let us know by e-mail whenever you can.`}</p>
                <Form.Check inline label={<span className='text-1'>My parents already indicated they are coming on a registration form of another camper</span>} 
                checked={registration.lunch == 0} onChange={() => onChangeRadio('lunch', 0)}
                type='radio' name='lunch' id='lunch1' isInvalid={!errors.lunch}/>
                <Form.Check inline label={<span className='text-1'>Both my parents are able to join and will be there</span>} 
                checked={registration.lunch == 1} onChange={() => onChangeRadio('lunch', 1)}
                type='radio' name='lunch' id='lunch2' isInvalid={!errors.lunch}/>
                <Form.Check inline label={<span className='text-1'>One of my parents is able to join and will be there</span>} 
                checked={registration.lunch == 2} onChange={() => onChangeRadio('lunch', 2)}
                type='radio' name='lunch' id='lunch3' isInvalid={!errors.lunch}/>
                <Form.Check inline label={<span className='text-1'>My parent's won't be joining</span>} 
                checked={registration.lunch == 3} onChange={() => onChangeRadio('lunch', 3)}
                type='radio' name='lunch' id='lunch4' isInvalid={!errors.lunch}/>
                <Form.Check inline label={<span className='text-1'>Unsure at the moment</span>} 
                checked={registration.lunch == 4} onChange={() => onChangeRadio('lunch', 4)}
                type='radio' name='lunch' id='lunch5' isInvalid={!errors.lunch}/>
            </Form.Group>

            <Form.Group className=' text-1 d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>Camp dates and times*</Form.Label>
                <p style={{textAlign: 'justify'}}>TCK Camp 2025 will commence at 2pm on Tuesday, {data.campstartdate} of January, and will continue until after lunch on Saturday, {data.campenddate} of January.</p>
                <Form.Check inline label={<span className='text-1'>I have read and understand the above</span>} type='radio' name='dates' id='dates'
                checked={registration.date} onChange={() => onChangeRadio('date', true)} isInvalid={!errors.date}/>
            </Form.Group>

            <Form.Group className=' text-1 d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1'>What to bring*</Form.Label>
                <p style={{textAlign: 'justify'}}>Campers must bring their own bedding (sleeping bag or double bed sheets and duvet, and pillows. Mattresses are provided), towels, toiletries, and enough clothing for five days as well as some old clothing for messy games. We also ask that campers bring a Bible, a notebook, and a pen. We love board games, so if you have any you're willing to bring with you, please mark your name on them and pack them in your bag. The camp will include a beach trip, so you should also bring swimwear and a beach towel. Please note that while Eastwest College is a safe environment, we do not accept responsibility for lost/damaged property, so please make sure that especially if expensive items are brought to camp they are well looked-after and ideally insured.</p>
                <Form.Check inline label={<span className='text-1'>I have read and accept all of the above</span>} type='radio' name='bring' id='bring'
                checked={registration.bring} onChange={() => onChangeRadio('bring', true)} isInvalid={!errors.bring}/>
            </Form.Group>

            <Form.Group className='text-1 d-flex flex-column mb-4'>
                <Form.Label className='fs-5 font-1 text-1'>Registration fees*</Form.Label>
                <p className='text-1' style={{textAlign: 'justify'}}>Registration costs are indicated on this website. If registering one camper, please select 'standard'. Any additional siblings from the same family receive a discounted rate. If registering three siblings, for example, please pay one standard registration + two additional sibling registrations. If you have any concerns, please get in touch by e-mail for a paper registration form and pay by direct credit.</p>
                <Form.Check inline label={<span className='text-1'>I have read and accept all of the above</span>} type='radio' name='fees' id='fees'
                checked={registration.fees} onChange={() => onChangeRadio('fees', true)} isInvalid={!errors.fees}/>
            </Form.Group>

            <hr className='text-1'/>

            <Form.Label className='fs-5 font-1 text-1'>Please sign*</Form.Label>
            <p className='text-1' style={{textAlign: 'justify'}}>Please write your full name and today's date in the box below. This will act as your digital signature. In doing so, you accept that you have read and agreed to all information in the above section, and that all information you have provided is true and accurate. If you are under 18, please have your parent/guardian sign.</p>
            <Form.Group className="mb-4" >
                <FloatingLabel label={<span className='text-1'>Full name dd/mm/yyyy</span>}>
                    <Form.Control isInvalid={!errors.signature} type="text" placeholder="signature" name='signature' value={registration.signature} onChange={onChangeRegistration}/>
                    <Form.Control.Feedback type="invalid">
                        Please sign the registration form.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Button className='w-100 btn-primary text-1' disabled={regoLoading} onClick={onSubmit}>{regoLoading ? 'Loading...' : 'Register'}</Button>
        </Form>
    )
}