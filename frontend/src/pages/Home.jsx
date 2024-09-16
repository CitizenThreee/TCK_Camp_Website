import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/containers/Footer';
import { useEffect, useState } from 'react';
import data from '../data.json';

export default function Home() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        const handleLoad = () => {
            alert('This site is still under development, info may be placeholder and registrations will not work :)')
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <>
            <div className='overflow-hidden bg-home'>
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
                                <h2 className='font-1'>{data.hometitle}</h2>
                                <p className='fs-5 text-justify' style={{ textAlign: 'justify' }}>
                                    {data.homeblurb}
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