import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function CalculateAge(dob) {
    if(!dob) return null
    const [day, month, year] = dob.split('/').map(Number);
    const birth = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

export default function CamperCard({ data={} }) {
    const [ expanded, setExpanded ] = useState(false);
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
    
    const onToggleCard = () => { setExpanded(!expanded); }

    return (
        <>
            <Card className="py-2 px-3 w-100 mb-3">
                <Card.Title as='button' onClick={onToggleCard} className="d-flex justify-content-between w-100 bg-white border-0 font-1 fs-5 py-2">
                    <p className="mb-0">{`${data.fname} ${data.lname} (${CalculateAge(data.dob)})`}</p> 
                    <p className="mb-0">{`${data.email}`}</p>
                </Card.Title>
                {expanded && <Card.Body className="w-100 pt-1 list-container">
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Rego Type:</p>
                        <p className="fs-6 m-0 right-item" style={{textTransform: 'capitalize'}}>{data.type}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Payment Status:</p>
                        <p className="fs-6 m-0 right-item">{data.paymentStatus}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Allergies:</p>
                        <p className="fs-6 m-0 right-item">{data.allergies ? 'Yes' : 'None'}</p>
                    </div>
                    {data.allergies && <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Allergy details:</p>
                        <p className="fs-6 m-0 right-item">{data.allergyDetails}</p>
                    </div>}
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Lunch Status:</p>
                        <p className="fs-6 m-0 right-item">
                            {data.lunch == 0 && 'Indicated Elsewhere'}
                            {data.lunch == 1 && 'Both Parents'}
                            {data.lunch == 2 && 'One Parent'}
                            {data.lunch == 3 && 'Not Coming'}
                            {data.lunch == 4 && 'Unsure'}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0 me-1">Date of birth:</p>
                        <p className="fs-6 m-0 right-item">{data.dob}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Phone:</p>
                        <p className="fs-6 m-0 right-item">{data.phone}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Address:</p>
                        <p className="fs-6 m-0 right-item" style={{ textAlign: 'right'}}>{`${data.address}, ${data.city}, ${data.state}, ${data.zip}`}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Country:</p>
                        <p className="fs-6 m-0 right-item">{data.country}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Contact 1:</p>
                        <p className="fs-6 m-0 right-item">{`${data.c1fname} ${data.c1lname}: ${data.c1phone}`}</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mb-1 px-1">
                        <p className="fs-6 fw-semibold m-0">Contact 2:</p>
                        <p className="fs-6 m-0 right-item">{`${data.c2fname} ${data.c2lname}: ${data.c2phone}`}</p>
                    </div>
                    <div className={`d-flex justify-content-between w-100 mb-1 px-1 ${isMobile && 'flex-column'}`}>
                        <p className="fs-6 fw-semibold m-0 me-2">Affiliations:</p>
                        <p className={`fs-6 m-0 ${!isMobile && 'right-item'}`}>{data.affiliations}</p>
                    </div>
                    <div className={`d-flex justify-content-between w-100 mb-1 px-1 ${isMobile && 'flex-column'}`}>
                        <p className="fs-6 fw-semibold m-0 me-2">Places Lived:</p>
                        <p className={`fs-6 m-0 ${!isMobile && 'right-item'}`}>{data.placesLived}</p>
                    </div>
                    <div className={`d-flex justify-content-between w-100 mb-1 px-1 ${isMobile && 'flex-column'}`}>
                        <p className="fs-6 fw-semibold m-0 me-2 text-nowrap">Next Year's Plans:</p>
                        <p className={`fs-6 m-0 ${!isMobile && 'right-item'}`}>{data.plans}</p>
                    </div>
                </Card.Body>}
            </Card>
        </>
    )
}