import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function AdminLogin({ onChangeStage, onChangeData }) {
    const [ loginFailed, setLoginFailed ] = useState(false);
    const [ loggingIn, setLoggingIn ] = useState(false);
    const [ input, setInput ] = useState({
        username: '',
        password: ''
    });
    
    const onChangeInput = (e) => {
        setLoginFailed(false);

        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onLoginAttepmt = async () => {
        setLoggingIn(true);

        try{
            const login = await fetch('https://vbiowx8w0l.execute-api.ap-southeast-2.amazonaws.com/prod/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: input.username, password: input.password })
            })

            const loginData = await login.json();
            console.log(loginData)

            if(loginData.statusCode == 401) setLoginFailed(true);
            else if (loginData.statusCode == 200 && loginData.body.items) {
                setLoggingIn(false);
                onChangeData([...loginData.body.items]);
                onChangeStage(1);
            }
        }
        catch {
            console.log('Failed to get data')
        }
        
        setLoggingIn(false);
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-dark p-4 rounded'>
                    <h1 className='font-1 mb-4 text-white'>TCK Camp Admin</h1>
                    <Form>
                        
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="username" name='username' value={input.username} onChange={onChangeInput}/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput2"
                                label="Password"
                                className='mb-3'
                            >
                                <Form.Control type="password" placeholder="password" name='password' value={input.password} onChange={onChangeInput}/>
                            </FloatingLabel>
                        </Form.Group>
                        {loginFailed && <p className='text-danger mb-3 mt-0 w-100 '> Username or Password incorrect </p>}
                        <Button className='w-100 btn-primary' onClick={onLoginAttepmt}>{loggingIn ? 'Loggin in...' : 'Login'}</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}