import eastwestlogo from '../../assets/eastwest-logo.png'

export default function Footer() {
    return (
        <footer className='d-flex flex-column align-items-center p-3 bg-1b' style={{ width: '100%', color: 'white'}} >
            <img src={eastwestlogo} alt="Eastwest college of intercultural studies" className="ew mb-2 rounded-2 mx-3" style={{maxWidth:'100%'}}/>
            <p className='m-0' style={{textAlign: 'center'}}>Eastwest College of Intercultural Studies © 2021</p>
        </footer>
    )
}