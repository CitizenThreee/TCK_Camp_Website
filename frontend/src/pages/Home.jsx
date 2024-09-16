import banner from '../assets/mahi.jpg';
import TopContainer from '../components/containers/TopContainer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/containers/Footer';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function Home() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        alert('This site is still under development, info may be placeholder and registrations will not work :)')

        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='overflow-hidden' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: "100%" }}>
                <HelmetProvider>
                    <Helmet>
                        <title>{`TCK Camp | Home`}</title>
                    </Helmet>
                </HelmetProvider>

                <header>
                    <NavBar active={'Home'} />
                </header>

                <div className='h-full overflow-y-auto'>
                    <div className='d-flex flex-column align-items-center justify-content-between h-container'>
                        <section className='p-2 my-auto w-100'>
                            <div className='p-3 bg-2b skewed-box mx-auto w-content'>
                                <h2 className='font-1'>What is TCK Camp?</h2>
                                <p className='fs-5 text-justify' style={{ textAlign: 'justify' }}>
                                    TCK Camp is a camp run every January in Gordonton, Hamilton, for TCK's (Third Culture Kids).
                                    Third Culture Kids share much in common: ironically, a lot our commonality comes from having little in
                                    common with everyone else around us. But as much as TCKs form something of a cultural group of our own,
                                    we’re all on individual journeys and are at different stages of life. One person might be 16 years old
                                    and have a full knowledge of where they want to go next, while another might be 19 and struggling to fit
                                    into life here with no idea what they want to do. Life is full of doors: some open, some close, and
                                    sometimes there are many to choose from, each with their own pros and cons.
                                </p>
                            </div>
                        </section>
                        {/*<div className='w-100 d-flex' style={{ height: '50px', background: 'linear-gradient(to bottom, #0000 0%, #000f 100%)' }}>
                            <p className={`font-1 text-white m-auto animdown ${isAtTop ? 'active' : ''}`}>
                                - camp themes -
                            </p>
                        </div>*/}
                    </div>
                    
                    {/*<div style={{ background: '#000', height: '200%', padding: '30px 15px'}}>
                        <section className='d-flex'>
                            <h1 className='font-1 mx-auto text-white'>2025</h1>
                        </section>
                    </div>*/}
                    <Footer />
                </div>
            </div>
        </>
    )
}