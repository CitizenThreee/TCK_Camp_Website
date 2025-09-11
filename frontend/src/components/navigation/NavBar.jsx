import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from '../../data.json';

export default function NavBar({ active }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <Navbar expand='md' className='font-1 bg-1b d-flex justify-content-between w-100' style={{ height: '70px', zIndex: 1 }}>
            <Navbar.Brand className='ms-4 mb-2 mt-1 position-relative text-light'>
                <h1 className='fs-2 text-1'>TCK CAMP</h1>
                <h6 className='position-absolute fs-6 text-1' style={{ bottom: '-5px', right: '10px' }}>{data.theme}</h6>
            </Navbar.Brand>
            <Navbar.Toggle className='me-3' aria-controls="navbar" style={{filter: 'invert(1)'}}/>
            <Navbar.Offcanvas placement="end" className={isMobile && 'bg-1b'}>
                <Offcanvas.Header closeButton style={{filter: 'invert(1)'}}> 
                    <Offcanvas.Title className='text-dark'>
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={isMobile
                    ? 'd-flex flex-column align-items-center gap-3 mt-3 font-1 fs-4 text-light' 
                    : 'gap-5 d-flex justify-content-end me-5 fs-4 text-light'}>
                    <Nav.Link className={`${active == 'Home' ? 'active-text' : 'hover-text'}`} href='/'>Home</Nav.Link>
                    <Nav.Link className={`${active == 'Info' ? 'active-text' : 'hover-text'}`} href='/Info'>Info</Nav.Link>
                    <Nav.Link className={`${active == 'Contact' ? 'active-text' : 'hover-text'}`} href='/Contact'>Contact</Nav.Link>
                    <Nav.Link className={`${active == 'Register' ? 'active-text' : 'hover-text'}`} href='/Register'>Register</Nav.Link>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    )
}