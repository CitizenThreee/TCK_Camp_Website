import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AdminBar from '../navigation/AdminBar';
import CamperCard from '../elements/CamperCard';
import AdminFilterForm from '../forms/AdminFilterForm';

function GetYear() {
    const today = new Date();
    let currentYear = today.getFullYear();
    const cutoffdate = new Date(currentYear, 0, 20);
    if (today >= cutoffdate) currentYear++;
    return currentYear;
}

export default function AdminPage({ data=[] }) {
    const [ currentData, setCurrentData ] = useState([]);
    const [ year, setYear ] = useState(GetYear());
    const [ search, setSearch ] = useState('');

    const onChangeYear = (newYear) => { setYear(newYear) }

    useEffect(() => {setCurrentData([...data])}, [data]);

    useEffect(() => { onFilter() }, [year, search])

    const onFilter = () => {
        let newData = data.filter((item) => item.paymentStatus == 'PAID' || item.paymentStatus == 'PAIDOUT').filter((item) => item.year == year);
        if(search) newData = newData.filter((item) => (`${item.fname} ${item.lname}`).toLowerCase().includes(search.toLowerCase()))

        setCurrentData(newData);
    }

    return (
        <>
            <div className='overflow-hidden vh-100 w-100 bg-light'>
                <HelmetProvider>
                    <Helmet>
                        <title>TCK Camp | Admin</title>
                    </Helmet>
                </HelmetProvider>

                <header>
                    <AdminBar year={year} onChangeYear={onChangeYear}/>
                </header>

                <div className='h-full mx-auto overflow-y-auto bg-white px-2' style={{ maxWidth: '1000px'}}>
                    <AdminFilterForm/>

                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <h2 className='font-1 mx-3'>{`Campers (${currentData.length})`}</h2>
                        <Form>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form>
                    </div> <hr />
                    {currentData.map((item, index) => <CamperCard key={index} data={{...item}}/>)}
                </div>
            </div>
        </>
    )
}