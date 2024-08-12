import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Dropdown, Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function GetYearsArray() {
    const startYear = 2016;
    const today = new Date();
    let currentYear = today.getFullYear();
    const cutoffdate = new Date(currentYear, 0, 16);
    if (today >= cutoffdate) currentYear++;

    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
}

export default function AdminBar({ year, onChangeYear }) {
    const yearArray = GetYearsArray();
    
    return (
        <Navbar expand='md' className='font-1 bg-1 d-flex justify-content-between w-100' style={{ height: '70px', zIndex: 1 }}>
            <Navbar.Brand className='ms-4 mb-2 mt-1 position-relative text-light'>
                <h1 className='fs-2'>TCK CAMP</h1>
                <h6 className='position-absolute fs-6' style={{ bottom: '-5px', right: '10px' }}>Admin</h6>
            </Navbar.Brand>
            <Navbar className='me-3'>
                <Dropdown>
                    <Dropdown.Toggle variant='outline-light'>{`Year: ${year}`}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {yearArray.map((item, index) => <Dropdown.Item key={index} onClick={() => onChangeYear(item)}>{item}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </Navbar>
    )
}