import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
    return (
        <Form className='text-black px-3 mx-auto' style={{ maxWidth: "700px" }}>
            <h2 className='font-1 text-white'>Contact</h2>
            <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="first name" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="last name" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="email" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a message here"
                        style={{ height: '100px' }}
                        className='mb-3'
                    />
                </FloatingLabel>
            </Form.Group>
            <Button className='w-100 btn-primary'>Send</Button>
        </Form>
    )
}